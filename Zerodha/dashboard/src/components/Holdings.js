// import React from "react";
// import { holdings } from "../data/data";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {

  const fetchData = () => {

    axios.get(
      "http://localhost:3002/allHoldings",
      {
        headers: {
          Authorization:
            localStorage.getItem("token"),
        },
      }
    )
    .then((res) => {
      setAllHoldings(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

  };

  fetchData();

  const interval = setInterval(
    fetchData,
    2000
  );

  return () => clearInterval(interval);

}, []);
  const labels = allHoldings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Avg cost</th>
              <th>LTP</th>
              <th>Cur. value</th>
              <th>P&L</th>
              <th>Net chg</th>
              <th>Day chg</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const pnl = curValue - stock.avg * stock.qty;

              const profClass = pnl >= 0 ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg ? stock.avg.toFixed(2) : 0}</td>
                  <td>{stock.price ? stock.price.toFixed(2) : 0}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2 )}
                  </td>

                  <td className={profClass}>{pnl.toFixed(2)}</td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <VerticalGraph data={data} />
      <div className="row">
  <div className="col">
    <h5>
      29,875.<span>55</span>{" "}
    </h5>
    <p>Total investments</p>
  </div>

  <div className="col">
    <h5>
      31,428.<span>95</span>{" "}
    </h5>
    <p>Current value</p>
  </div>

  <div className="col">
    <h5>
      1,553.40 <span>(+5.20%)</span>
    </h5>
    <p>P&amp;L</p>
  </div>
</div>

    </>
  );
};

export default Holdings;
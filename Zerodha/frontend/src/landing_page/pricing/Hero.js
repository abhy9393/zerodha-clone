// import React from "react";

// function Hero() {
//   return (
//     <div className="container">
//       <div className="row p-5 mt-5 border-bottom text-center">
//         <h1>Pricing</h1>
//         <h3 className="text-muted mt-3 fs-5">
//           Free equity investments and flat ₹20 traday and F&O trades
//         </h3>
//       </div>
//       <div className="row p-5 mt-5 text-center">
//         <div className="col-4 p-4">
//           <img src="media/images/pricingEquity.svg" />
//           <h1 className="fs-3">Free equity delivery</h1>
//           <p className="text-muted">
//             All equity delivery investments (NSE, BSE), are absolutely free — ₹
//             0 brokerage.
//           </p>
//         </div>
//         <div className="col-4 p-4">
//           <img src="media/images/intradayTrades.svg" />
//           <h1 className="fs-3">Intraday and F&O trades</h1>
//           <p className="text-muted">
//             Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
//             intraday trades across equity, currency, and commodity trades.
//           </p>
//         </div>
//         <div className="col-4 p-4">
//           <img src="media/images/pricingEquity.svg" />
//           <h1 className="fs-3">Free direct MF</h1>
//           <p className="text-muted">
//             All direct mutual fund investments are absolutely free — ₹ 0
//             commissions & DP charges.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;
import React from "react";

function Hero() {
  return (
    <div className="container py-5">

      {/* TOP SECTION */}
      <div className="row border-bottom text-center pb-5">

        <div className="col-12">

          <h1
            className="fw-bold"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
            }}
          >
            Pricing
          </h1>

          <h3
            className="text-muted mt-3"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.4rem)",
            }}
          >
            Free equity investments and flat ₹20
            intraday and F&O trades
          </h3>

        </div>
      </div>

      {/* CARDS SECTION */}
      <div className="row text-center py-5 g-4">

        {/* CARD 1 */}
        <div className="col-lg-4 col-md-6 col-12">

          <div className="p-4 h-100">

            <img
              src="media/images/pricingEquity.svg"
              alt="Equity"
              className="img-fluid mb-4"
              style={{ maxWidth: "75%" }}
            />

            <h1 className="fs-3 mb-3">
              Free equity delivery
            </h1>

            <p className="text-muted">
              All equity delivery investments
              (NSE, BSE), are absolutely free —
              ₹0 brokerage.
            </p>

          </div>
        </div>

        {/* CARD 2 */}
        <div className="col-lg-4 col-md-6 col-12">

          <div className="p-4 h-100">

            <img
              src="media/images/intradayTrades.svg"
              alt="Intraday"
              className="img-fluid mb-4"
              style={{ maxWidth: "75%" }}
            />

            <h1 className="fs-3 mb-3">
              Intraday and F&O trades
            </h1>

            <p className="text-muted">
              Flat ₹20 or 0.03% (whichever is lower)
              per executed order on intraday trades
              across equity, currency, and commodity.
            </p>

          </div>
        </div>

        {/* CARD 3 */}
        <div className="col-lg-4 col-md-6 col-12 mx-md-auto">

          <div className="p-4 h-100">

            <img
              src="media/images/pricingEquity.svg"
              alt="Mutual Fund"
              className="img-fluid mb-4"
              style={{ maxWidth: "75%" }}
            />

            <h1 className="fs-3 mb-3">
              Free direct MF
            </h1>

            <p className="text-muted">
              All direct mutual fund investments
              are absolutely free — ₹0 commissions
              & DP charges.
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;
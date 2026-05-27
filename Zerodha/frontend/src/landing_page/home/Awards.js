// import React from "react";

// function Awards() {
//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-6 p-5">
//           <img src="media/images/largestBroker.svg" />
//         </div>
//         <div className="col-6 p-5 mt-5">
//           <h1>Largest stock broker in India</h1>
//           <p className="mb-5">
//             2+ million Zerodha clients contribute to over 15% of all retail
//             order volumes in India daily by trading and investing in:
//           </p>
//           <div className="row">
//             <div className="col-6">
//               <ul>
//                 <li>
//                   <p>Futures and Options</p>
//                 </li>
//                 <li>
//                   <p>Commodity derivatives</p>
//                 </li>
//                 <li>
//                   <p>Currency derivatives</p>
//                 </li>
//               </ul>
//             </div>
//             <div className="col-6">
//               <ul>
//                 <li>
//                   <p>Stocks & IPOs</p>
//                 </li>
//                 <li>
//                   <p>Direct mutual funds</p>
//                 </li>
//                 <li>
//                   <p>Bonds and Govt. Securities</p>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <img src="media/images/pressLogos.png" style={{ width: "90%" }} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Awards;

import React from "react";

function Awards() {
  return (
    <div className="container py-5">

      <div className="row align-items-center">

        {/* LEFT IMAGE */}
        <div className="col-lg-6 col-12 text-center mb-4 mb-lg-0">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
            style={{ maxWidth: "100%" }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-lg-6 col-12">

          <h1
            className="fw-bold mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Largest stock broker in India
          </h1>

          <p
            className="text-muted mb-4"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.1rem)",
            }}
          >
            2+ million Zerodha clients contribute to over
            15% of all retail order volumes in India daily
            by trading and investing in:
          </p>

          {/* FEATURES */}
          <div className="row">

            <div className="col-sm-6 col-12 mb-3">
              <ul>
                <li><p>Futures and Options</p></li>
                <li><p>Commodity derivatives</p></li>
                <li><p>Currency derivatives</p></li>
              </ul>
            </div>

            <div className="col-sm-6 col-12 mb-3">
              <ul>
                <li><p>Stocks & IPOs</p></li>
                <li><p>Direct mutual funds</p></li>
                <li><p>Bonds and Govt. Securities</p></li>
              </ul>
            </div>

          </div>

          {/* PRESS LOGOS */}
          <div className="text-center text-lg-start mt-4">
            <img
              src="media/images/pressLogos.png"
              alt="Press Logos"
              className="img-fluid"
              style={{ maxWidth: "90%" }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Awards;

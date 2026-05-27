// import React from "react";

// function Pricing() {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-4">
//           <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
//           <p>
//             We pioneered the concept of discount broking and price transparency
//             in India. Flat fees and no hidden charges.
//           </p>
//           <a href="" style={{ textDecoration: "none" }}>
//             See Pricing{" "}
//             <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
//           </a>
//         </div>
//         <div className="col-2"></div>
//         <div className="col-6  mb-5">
//           <div className="row text-center">
//             <div className="col p-3 border">
//               <h1 className="mb-3">₹0</h1>
//               <p>
//                 Free equity delivery and
//                 <br />
//                 direct mutual funds
//               </p>
//             </div>
//             <div className="col p-3 border">
//               <h1 className="mb-3">₹20</h1>
//               <p>Intraday and F&O</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Pricing;
import React from "react";

function Pricing() {
  return (
    <div className="container py-5">

      <div className="row align-items-center">

        {/* LEFT CONTENT */}
        <div className="col-lg-4 col-12 mb-5 mb-lg-0">

          <h1
            className="fw-bold mb-3"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Unbeatable pricing
          </h1>

          <p
            className="text-muted"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.1rem)",
            }}
          >
            We pioneered the concept of discount broking
            and price transparency in India. Flat fees
            and no hidden charges.
          </p>

          <a
            href="/"
            style={{ textDecoration: "none" }}
            className="fw-semibold"
          >
            See Pricing{" "}
            <i
              className="fa fa-long-arrow-right"
              aria-hidden="true"
            ></i>
          </a>

        </div>

        {/* SPACING */}
        <div className="col-lg-1 d-none d-lg-block"></div>

        {/* RIGHT CARDS */}
        <div className="col-lg-7 col-12">

          <div className="row g-4 text-center">

            {/* CARD 1 */}
            <div className="col-md-6 col-12">

              <div className="border rounded p-4 h-100 shadow-sm">

                <h1 className="fw-bold mb-3">₹0</h1>

                <p className="text-muted mb-0">
                  Free equity delivery and
                  <br />
                  direct mutual funds
                </p>

              </div>

            </div>

            {/* CARD 2 */}
            <div className="col-md-6 col-12">

              <div className="border rounded p-4 h-100 shadow-sm">

                <h1 className="fw-bold mb-3">₹20</h1>

                <p className="text-muted mb-0">
                  Intraday and F&O
                </p>

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
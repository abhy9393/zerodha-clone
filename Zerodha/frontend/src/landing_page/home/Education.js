// import React from "react";

// function Education() {
//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-6">
//           <img src="media/images/education.svg" style={{ width: "70%" }} />
//         </div>
//         <div className="col-6">
//           <h1 className="mb-3 fs-2">Free and open market education</h1>
//           <p>
//             Varsity, the largest online stock market education book in the world
//             covering everything from the basics to advanced trading.
//           </p>
//           <a href="" style={{ textDecoration: "none" }}>
//             Versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
//           </a>
//           <p className="mt-5">
//             TradingQ&A, the most active trading and investment community in
//             India for all your market related queries.
//           </p>
//           <a href="" style={{ textDecoration: "none" }}>
//             TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Education;
import React from "react";

function Education() {
  return (
    <div className="container py-5">

      <div className="row align-items-center">

        {/* IMAGE SECTION */}
        <div className="col-lg-6 col-12 text-center mb-5 mb-lg-0">

          <img
            src="media/images/education.svg"
            alt="Education"
            className="img-fluid"
            style={{ maxWidth: "80%" }}
          />

        </div>

        {/* CONTENT SECTION */}
        <div className="col-lg-6 col-12">

          <h1
            className="fw-bold mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Free and open market education
          </h1>

          <p
            className="text-muted"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.1rem)",
            }}
          >
            Varsity, the largest online stock market education
            book in the world covering everything from the basics
            to advanced trading.
          </p>

          <a
            href="/"
            style={{ textDecoration: "none" }}
            className="fw-semibold"
          >
            Varsity{" "}
            <i
              className="fa fa-long-arrow-right"
              aria-hidden="true"
            ></i>
          </a>

          <p
            className="text-muted mt-5"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.1rem)",
            }}
          >
            TradingQ&A, the most active trading and investment
            community in India for all your market related queries.
          </p>

          <a
            href="/"
            style={{ textDecoration: "none" }}
            className="fw-semibold"
          >
            TradingQ&A{" "}
            <i
              className="fa fa-long-arrow-right"
              aria-hidden="true"
            ></i>
          </a>

        </div>
      </div>
    </div>
  );
}

export default Education;
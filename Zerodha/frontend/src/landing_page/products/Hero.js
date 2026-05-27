// import React from "react";

// function Hero() {
//   return (
//     <div className="container border-bottom mb-5">
//       <div className="text-center mt-5 p-3">
//         <h1>Technology</h1>
//         <h3 className="text-muted mt-3 fs-4">
//           Sleek, modern and intuitive trading platforms
//         </h3>
//         <p className="mt-3 mb-5">
//           Check out our{" "}
//           <a href="" style={{ textDecoration: "none" }}>
//             investment offerings{" "}
//             <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Hero;
import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center py-5 px-3">
          
          <h1 className="fw-bold display-5">
            Technology
          </h1>

          <h3 className="text-muted mt-3 fs-5 fs-md-4">
            Sleek, modern and intuitive trading platforms
          </h3>

          <p className="mt-4 mb-5 fs-6">
            Check out our{" "}
            <a
              href="#"
              className="text-decoration-none fw-semibold"
            >
              investment offerings{" "}
              <i className="fa fa-long-arrow-right ms-1"></i>
            </a>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Hero;
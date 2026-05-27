// import React from "react";

// function Hero() {
//   return (
//     <div className="container p-5 mb-5">
//       <div className="row text-center">
//         <img
//           src="media/images/homeHero.png"
//           alt="Hero Image"
//           className="mb-5"
//         />
//         <h1 className="mt-5">Invest in everything</h1>
//         <p>
//           Online platform to invest in stocks, derivatives, mutual funds, and
//           more
//         </p>
//         <button
//           className="p-2 btn btn-primary fs-5 mb-5"
//           style={{ width: "20%", margin: "0 auto" }}
//         >
//           Signup Now
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Hero;
import React from "react";

function Hero() {
  return (
    <div className="container py-5 mb-5">

      <div className="row justify-content-center text-center">

        {/* HERO IMAGE */}
        <div className="col-12">
          <img
            src="media/images/homeHero.png"
            alt="Hero"
            className="img-fluid mb-5"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* HERO CONTENT */}
        <div className="col-lg-8 col-md-10 col-12">

          <h1
            className="fw-bold mb-3"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
            }}
          >
            Invest in everything
          </h1>

          <p
            className="text-muted mb-4"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
            }}
          >
            Online platform to invest in stocks, derivatives,
            mutual funds, and more
          </p>

          <button
            className="btn btn-primary px-5 py-2 fs-5"
          >
            Signup Now
          </button>

        </div>
      </div>
    </div>
  );
}

export default Hero;
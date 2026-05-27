// import React from "react";

// function LeftSection({
//   imageURL,
//   productName,
//   productDesription,
//   tryDemo,
//   learnMore,
//   googlePlay,
//   appStore,
// }) {
//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-6">
//           <img src={imageURL} />
//         </div>
//         <div className="col-6 p-5 mt-5">
//           <h1>{productName}</h1>
//           <p>{productDesription}</p>
//           <div>
//             <a href={tryDemo}>Try Demo</a>
//             <a href={learnMore} style={{ marginLeft: "50px" }}>
//               Learn More
//             </a>
//           </div>
//           <div className="mt-3">
//             <a href={googlePlay}>
//               <img src="media/images/googlePlayBadge.svg" />
//             </a>
//             <a href={appStore}>
//               <img
//                 src="media/images/appstoreBadge.svg"
//                 style={{ marginLeft: "50px" }}
//               />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LeftSection;
import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        {/* Image Section */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
          />
        </div>

        {/* Content Section */}
        <div className="col-12 col-md-6 p-3 p-md-5 text-center text-md-start">
          
          <h1 className="fw-bold">{productName}</h1>

          <p className="text-muted">{productDesription}</p>

          {/* Links */}
          <div className="d-flex justify-content-center justify-content-md-start gap-4 mt-3">
            <a href={tryDemo} className="text-decoration-none">
              Try Demo
            </a>
            <a href={learnMore} className="text-decoration-none">
              Learn More
            </a>
          </div>

          {/* App Buttons */}
          <div className="d-flex justify-content-center justify-content-md-start align-items-center gap-3 mt-4">
            
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                style={{ height: "40px" }}
              />
            </a>

            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                style={{ height: "40px" }}
              />
            </a>

          </div>

        </div>
      </div>
    </div>
  );
}

export default LeftSection;
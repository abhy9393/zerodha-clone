
import React from "react";

function RightSection({
  imageURL,
  productName,
  productDesription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        {/* Text Section */}
        <div className="col-12 col-md-6 p-3 p-md-5 text-center text-md-start">
          <h1 className="fw-bold">{productName}</h1>

          <p className="text-muted">{productDesription}</p>

          <a
            href={learnMore}
            className="text-decoration-none fw-semibold"
          >
            Learn More →
          </a>
        </div>

        {/* Image Section */}
        <div className="col-12 col-md-6 text-center mt-4 mt-md-0">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
          />
        </div>

      </div>
    </div>
  );
}

export default RightSection;
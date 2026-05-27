
import React from "react";

function Universe() {
  return (
    <div className="container mt-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our partner platforms
        </p>
      </div>

      {/* Grid Section */}
      <div className="row text-center g-4">

        {Array(6).fill(0).map((_, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4">
            <div className="p-3 border rounded h-100">

              <img
                src="media/images/smallcaseLogo.png"
                alt="platform"
                className="img-fluid mb-2"
                style={{ maxHeight: "40px" }}
              />

              <p className="text-muted mb-0">
                Thematic investment platform
              </p>

            </div>
          </div>
        ))}

      </div>

      {/* Button */}
      <div className="text-center mt-5 mb-5">
        <button className="btn btn-primary px-4 py-2 fs-5">
          Signup Now
        </button>
      </div>

    </div>
  );
}

export default Universe;
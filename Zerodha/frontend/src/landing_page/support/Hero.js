
import React from "react";

function Hero() {
  return (
    <section className="container-fluid bg-light" id="supportHero">

      {/* Top bar */}
      <div className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom">
        <h5 className="mb-0 fw-bold">Support Portal</h5>
        <a href="#" className="text-decoration-none">
          Track Tickets
        </a>
      </div>

      {/* Main content */}
      <div className="container py-5">

        <div className="row g-4 align-items-start">

          {/* Left Section */}
          <div className="col-12 col-md-6">

            <h2 className="fs-4 fw-bold mb-4">
              Search for an answer or browse help topics to create a ticket
            </h2>

            {/* Search box */}
            <input
              type="text"
              className="form-control p-3 mb-3"
              placeholder="Eg. how do I activate F&O"
            />

            {/* Quick links */}
            <div className="d-flex flex-wrap gap-3">
              <a href="#" className="text-decoration-none text-muted">
                Track account opening
              </a>
              <a href="#" className="text-decoration-none text-muted">
                Track segment activation
              </a>
              <a href="#" className="text-decoration-none text-muted">
                Intraday margins
              </a>
              <a href="#" className="text-decoration-none text-muted">
                Kite user manual
              </a>
            </div>

          </div>

          {/* Right Section */}
          <div className="col-12 col-md-6">

            <h2 className="fs-4 fw-bold mb-3">Featured</h2>

            <ol className="ps-3">
              <li className="mb-2">
                <a href="#" className="text-decoration-none">
                  Current Takeovers and Delisting - January 2024
                </a>
              </li>

              <li>
                <a href="#" className="text-decoration-none">
                  Latest Intraday leverages - MIS & CO
                </a>
              </li>
            </ol>

          </div>

        </div>
      </div>

    </section>
  );
}

export default Hero;
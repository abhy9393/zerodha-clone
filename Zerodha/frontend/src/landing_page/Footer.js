
import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }} className="pt-5">

      <div className="container border-top pt-5">

        {/* Top Section */}
        <div className="row g-4">

          {/* Logo + Info */}
          <div className="col-12 col-md-3">
            <img
              src="media/images/logo.svg"
              alt="logo"
              style={{ width: "60%" }}
              className="mb-3"
            />
            <p className="text-muted small">
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div className="col-6 col-md-3">
            <h6 className="fw-bold">Company</h6>
            <div className="d-flex flex-column gap-2">
              <a href="#" className="text-decoration-none text-muted">About</a>
              <a href="#" className="text-decoration-none text-muted">Products</a>
              <a href="#" className="text-decoration-none text-muted">Pricing</a>
              <a href="#" className="text-decoration-none text-muted">Referral programme</a>
              <a href="#" className="text-decoration-none text-muted">Careers</a>
              <a href="#" className="text-decoration-none text-muted">Zerodha.tech</a>
              <a href="#" className="text-decoration-none text-muted">Press & media</a>
              <a href="#" className="text-decoration-none text-muted">CSR</a>
            </div>
          </div>

          {/* Support */}
          <div className="col-6 col-md-3">
            <h6 className="fw-bold">Support</h6>
            <div className="d-flex flex-column gap-2">
              <a href="#" className="text-decoration-none text-muted">Contact</a>
              <a href="#" className="text-decoration-none text-muted">Support portal</a>
              <a href="#" className="text-decoration-none text-muted">Z-Connect blog</a>
              <a href="#" className="text-decoration-none text-muted">Charges</a>
              <a href="#" className="text-decoration-none text-muted">Downloads</a>
            </div>
          </div>

          {/* Account */}
          <div className="col-12 col-md-3">
            <h6 className="fw-bold">Account</h6>
            <div className="d-flex flex-column gap-2">
              <a href="#" className="text-decoration-none text-muted">Open an account</a>
              <a href="#" className="text-decoration-none text-muted">Fund transfer</a>
              <a href="#" className="text-decoration-none text-muted">60 day challenge</a>
            </div>
          </div>

        </div>

        {/* Legal Section */}
        <div className="mt-5 text-muted small">

          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no. INZ000031633...
          </p>

          <p>
            Procedure to file complaint on SEBI SCORES...
          </p>

          <p>
            Investments in securities market are subject to market risks...
          </p>

          <p>
            Prevent unauthorised transactions in your account...
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
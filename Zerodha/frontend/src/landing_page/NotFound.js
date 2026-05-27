
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container">

      <div
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{ minHeight: "80vh" }}
      >

        <h1 className="display-3 fw-bold text-danger">404</h1>

        <h2 className="fw-semibold">Page Not Found</h2>

        <p className="text-muted mt-2">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <Link to="/" className="btn btn-primary mt-3 px-4 py-2">
          Go Back Home
        </Link>

      </div>

    </div>
  );
}

export default NotFound;
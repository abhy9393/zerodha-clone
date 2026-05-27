
import React from "react";

function CreateTicket() {

  const topics = [
    {
      title: "Account Opening",
      items: [
        "Online Account Opening",
        "Offline Account Opening",
        "Company, Partnership and HUF Account Opening",
        "NRI Account Opening",
        "Charges at Zerodha",
        "Zerodha IDFC FIRST Bank 3-in-1 Account",
        "Getting Started",
      ],
    },
    {
      title: "Your Account",
      items: [
        "Login Issues",
        "Profile Settings",
        "Two Factor Authentication",
        "Nominee Update",
        "Bank Linking",
        "Password Reset",
        "Account Closure",
      ],
    },
    {
      title: "Trading & Markets",
      items: [
        "Order Types",
        "Margin & Leverage",
        "Market Timings",
        "Trading Holidays",
        "Charges Explained",
        "P&L Reports",
        "Tax Reports",
      ],
    },
    {
      title: "Funds & Withdrawals",
      items: [
        "Add Funds",
        "Withdraw Funds",
        "Payment Methods",
        "UPI Issues",
        "Bank Transfer Delay",
        "Refund Status",
        "Ledger Explanation",
      ],
    },
    {
      title: "Kite Platform",
      items: [
        "Kite Web",
        "Kite Mobile App",
        "Charts Issues",
        "Order Placement",
        "Watchlist Setup",
        "App Crash Fix",
        "Data Sync Issues",
      ],
    },
    {
      title: "Technical Support",
      items: [
        "Bug Report",
        "API Issues",
        "Server Down",
        "Login Error",
        "App Not Working",
        "Performance Issues",
        "General Help",
      ],
    },
  ];

  return (
    <div className="container my-5">

      {/* Heading */}
      <div className="row mb-4 text-center">
        <h1 className="fs-2 fw-bold">
          To create a ticket, select a relevant topic
        </h1>
      </div>

      {/* Grid */}
      <div className="row g-4">

        {topics.map((topic, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4">

            <div className="p-4 border rounded h-100">

              <h5 className="fw-bold mb-3">
                <i className="fa fa-plus-circle me-2"></i>
                {topic.title}
              </h5>

              {topic.items.map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="d-block text-decoration-none text-muted mb-2"
                >
                  {item}
                </a>
              ))}

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default CreateTicket;
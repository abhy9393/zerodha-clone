
import React, { useEffect, useState } from "react";
import Home from "./components/Home";

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    // GET TOKEN FROM URL
    const params = new URLSearchParams(window.location.search);

    const tokenFromURL = params.get("token");

    // SAVE TOKEN
    if (tokenFromURL) {
      localStorage.setItem("token", tokenFromURL);

      // CLEAN URL
      window.history.replaceState({}, document.title, "/");
    }

    // CHECK TOKEN
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "http://localhost:3000/login";
    } else {
      setLoading(false);
    }

  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return <Home />;
};

export default App;
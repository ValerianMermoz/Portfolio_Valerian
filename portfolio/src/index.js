import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Page from "./page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route exact path="/" element={<Page />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

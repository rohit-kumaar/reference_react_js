import { EmployeeState } from "./context/EmployeeState";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EmployeeState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </EmployeeState>
  </React.StrictMode>
);

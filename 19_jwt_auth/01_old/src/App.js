import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Addproduct from "./components/Addproduct";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Products from "./components/Products";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/addproduct" element={<Addproduct />} />
          <Route path="/dashboard/products" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

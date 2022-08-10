import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mydata from "./components/Mydata";
import Nav from "./components/Nav";
import Products from "./components/Products";
export default function App() {
  return (
    <div>
      <Router>
        <Nav />
        <section className="container">
          <Routes>
            <Route path="/" element={<Mydata />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </section>
      </Router>
    </div>
  );
}

import React from "react";
import { Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </>
  );
}

export default App;

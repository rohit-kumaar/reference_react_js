import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";
import BlogSingle from "./components/BlogSingle";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import ProductDetails from "./components/ProductDetails";
import Shop from "./components/Shop";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-single" element={<BlogSingle />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Addproduct from "./components/Addproduct";
import Contact from "./components/Contact";
import Editproduct from "./components/Editproduct";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Posts from "./components/Posts";
import Products from "./components/Products";
import Users from "./components/Users";
export default function App() {
  return (
    <main>
      <Router>
        <Nav />
        <section className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/users" element={<Users />} />
            <Route path="/products" element={<Products />} />
            <Route path="/addproduct" element={<Addproduct />} />
            <Route path="/editproduct/:id" element={<Editproduct />} />
          </Routes>
        </section>
      </Router>
    </main>
  );
}

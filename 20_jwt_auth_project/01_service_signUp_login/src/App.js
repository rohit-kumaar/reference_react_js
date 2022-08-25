import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyAppBar from "./components/AppBar";
import Login from "./components/Login";
import Notfound from "./components/Notfound";
import Products from "./components/Products";
import Signup from "./components/Signup";
import Container from "@mui/material/Container";

export default function App() {
  return (
    <div>
      <Router>
        <MyAppBar />
        <Container>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

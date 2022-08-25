import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MyAppBar from "./components/AppBar";
import Login from "./components/Login";
import Notfound from "./components/Notfound";
import Products from "./components/Products";
import Signup from "./components/Signup";
import Container from "@mui/material/Container";
import Addproduct from "./components/Addproduct";
import Cart from "./components/Cart";
import { isAdmin, isLoggedIn } from "./config/Myservice";

function ProtectRoute({ children }) {
  const auth = isLoggedIn();
  return auth ? children : <Navigate to="/" />;
}

function ProtectAdminRoute({ children }) {
  const auth = isLoggedIn();
  const adminauth = isAdmin();
  return auth && adminauth ? children : <Navigate to="/" />;
}
export default function App() {
  return (
    <div>
      <Router>
        <MyAppBar />
        <Container>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/products"
              element={
                <ProtectRoute>
                  <Products />
                </ProtectRoute>
              }
            />
            <Route
              path="/addproduct"
              element={
                <ProtectAdminRoute>
                  <Addproduct />
                </ProtectAdminRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <ProtectRoute>
                  <Cart />
                </ProtectRoute>
              }
            />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

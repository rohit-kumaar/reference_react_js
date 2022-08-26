import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProtectAdminRoute, ProtectRoute } from "routes/privateRoutes";
import { ROUTE_PATH } from "routes/publicRoutes";
import React, { Suspense } from "react";
import { Container } from "@mui/system";
import Header from "components/Header";
import SignUp from "pages/SignUp";
import "App.css";
const Home = React.lazy(() => import("pages/Home"));
const Login = React.lazy(() => import("pages/Login"));
const NotFound = React.lazy(() => import("pages/NotFound"));
const Products = React.lazy(() => import("pages/Products"));
const AddProducts = React.lazy(() => import("pages/AddProducts"));
const Cart = React.lazy(() => import("pages/Cart"));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Container style={{ marginTop: "100px" }}>
          <Routes>
            <Route path={ROUTE_PATH.SignUp} element={<SignUp />} />
            <Route path={ROUTE_PATH.NotFound} element={<NotFound />} />
            <Route path={ROUTE_PATH.Home} element={<Home />} />
            <Route path={ROUTE_PATH.Login} element={<Login />} />
            <Route
              path={ROUTE_PATH.Products}
              element={
                <ProtectRoute>
                  <Products />
                </ProtectRoute>
              }
            />
            <Route
              path={ROUTE_PATH.AddProducts}
              element={
                <ProtectAdminRoute>
                  <AddProducts />
                </ProtectAdminRoute>
              }
            />
            <Route
              path={ROUTE_PATH.Cart}
              element={
                <ProtectRoute>
                  <Cart />
                </ProtectRoute>
              }
            />
          </Routes>
        </Container>
      </Suspense>
    </Router>
  );
}

export default App;

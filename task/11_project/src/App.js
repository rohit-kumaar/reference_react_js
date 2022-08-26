import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "components/Header";
import "App.css";
import Home from "pages/Home";
import SignUp from "pages/SignUp";
import Login from "pages/Login";
import { ROUTE_PATH } from "routes/publicRoutes";
import NotFound from "pages/NotFound";
import Products from "pages/Products";
import { Container } from "@mui/system";
import AddProducts from "pages/AddProducts";
import Cart from "pages/Cart";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path={ROUTE_PATH.Home} element={<Home />} />
          <Route path={ROUTE_PATH.SignUp} element={<SignUp />} />
          <Route path={ROUTE_PATH.Login} element={<Login />} />
          <Route path={ROUTE_PATH.NotFound} element={<NotFound />} />
          <Route path={ROUTE_PATH.Products} element={<Products />} />
          <Route path={ROUTE_PATH.AddProducts} element={<AddProducts />} />
          <Route path={ROUTE_PATH.Cart} element={<Cart />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

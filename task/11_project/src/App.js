import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "components/Header";
import "App.css";
import Home from "pages/Home";
import SignUp from "pages/SignUp";
import Login from "pages/Login";
import { ROUTE_PATH } from "routes/publicRoutes";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={ROUTE_PATH.Home} element={<Home />} />
        <Route path={ROUTE_PATH.SignUp} element={<SignUp />} />
        <Route path={ROUTE_PATH.Login} element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

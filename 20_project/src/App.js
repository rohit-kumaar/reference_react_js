import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "components/Header";
import "App.css";
import Home from "pages/Home";
import SignUp from "pages/SignUp";
import Login from "pages/Login";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

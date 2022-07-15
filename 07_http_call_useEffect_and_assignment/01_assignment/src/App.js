import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Comments from "./components/Comments";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comments" element={<Comments />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

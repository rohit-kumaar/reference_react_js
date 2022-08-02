import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Albums from "./components/Albums";
import Comments from "./components/Comments";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Photos from "./components/Photos";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

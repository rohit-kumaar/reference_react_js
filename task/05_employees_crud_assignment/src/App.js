import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Employees from "./components/Employees";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="mt-5">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/edit-employee/:id" element={<EditEmployee />} />
            <Route path="/add-employee" element={<AddEmployee />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

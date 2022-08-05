import EditEmployee from "./components/EditEmployee";
import AddEmployee from "./components/AddEmployee";
import { Routes, Route } from "react-router-dom";
import Employees from "./components/Employees";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import React from "react";

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-5">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/edit-employee/:id" element={<EditEmployee />} />
          <Route path="/add-employee" element={<AddEmployee />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-600 text-whote p4 flex justify-between">
      <div className="front-bold text-xl">
        <link to="/"></link>
      </div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/submit">Submit Report</Link>
        <Link to="/reports">View Reports</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;

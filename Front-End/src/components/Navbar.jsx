import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token"); // remove JWT
    window.location.href = "/"; // redirect to home
  };

  const token = localStorage.getItem("token");

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">Cleanify</h1>

      <div className="flex gap-4">
        <Link to="/">Home</Link>

        {!token ? (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-red-600 px-2 py-1 rounded"
          >
            Logout
          </button>
        )}

        <Link to="/submit-report">Submit Report</Link>
        <Link to="/reports">Reports</Link>
      </div>
    </nav>
  );
}

export default Navbar;

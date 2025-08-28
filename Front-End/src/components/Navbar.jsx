import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token"); // remove JWT
    window.location.href = "/"; // redirect to home
  };

  const token = localStorage.getItem("token");

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.navTitle}>Cleanify</h1>

      <div className={styles.navList}>
        <Link className={styles.navLink} to="/">Home</Link>

        {!token ? (
          <>
            <Link className={styles.navLink}to="/register">Register</Link>
            <Link className={styles.navLink}to="/login">Login</Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className={styles.logoutBtn}
          >
            Logout
          </button>
        )}

        <Link className={styles.navLink} to="/submit-report">Submit Report</Link>
        <Link className={styles.navLink} to="/reports">Reports</Link>
      </div>
    </nav>
  );
}

export default Navbar;

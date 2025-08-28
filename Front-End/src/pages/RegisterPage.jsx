import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import styles from "./RegisterPage.module.css";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/users/register", {
        name,
        email,
        password,
      });
      setMessage("Registration successful!");
      navigate("/login"); // redirect to login page
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.formBox}> Register</h2>
      {message && <p className={styles.title}>{message}</p>}

      <form onSubmit={handleRegister} className={styles.message}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.inputField}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.inputField}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputField}
        />

        <button type="submit" className={styles.submitBtn}>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;

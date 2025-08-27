import axios from "axios";
import {useNavigate} from "react-router-dom";
import React, { useState } from "react";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
        await axios.post("http://localhost:5000/api/users/register", {
        username,
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
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4"> Register</h2>
      {message && <p className="mb-3 text-red-600">{message}</p>}

      <form onSubmit={handleRegister} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
        />

        <button type="submit" className="bg-green-600 text-white p-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;

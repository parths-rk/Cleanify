import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      setMessage("Login Successful!");
      navigate("/");
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {message && <p className="text-red-600 mb-2">{message}</p>}
      <form onSubmit={handleLogin} className="flex flex-col gap-3">
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
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;

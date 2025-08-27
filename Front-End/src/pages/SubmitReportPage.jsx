import React, { useState } from "react";
import axios from "axios";

function SubmitReportPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      setMessage("You must be logged in to submit a report");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/reports",
        { title, description, location, imageUrl },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage("Report Submitted successfully!");
      setTitle("");
      setDescription("");
      setLocation("");
      setImageUrl("");
    } catch (err) {
      setMessage(err.response?.data?.message || "Submission failed");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Submit Report</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <br />

        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <br />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button type="submit">Submit Report</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default SubmitReportPage;

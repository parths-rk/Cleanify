import React, { useState } from "react";
import axios from "axios";
import styles from "./SubmitReportPage.module.css";
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
        "http://localhost:5000/api/reports",
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
    <div className={styles.container}>
      <div className={styles.formBox}>
      <h2 className={styles.title}>Submit Report</h2>
       {message && <p className={styles.message}>{message}</p>}

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.inputField}
        />

        <br />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={styles.inputField}
        ></textarea>

        <br />

        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className={styles.inputField}
        />

        <br />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={styles.inputField}
        />

        <button type="submit" className={styles.submitBtn}>Submit</button>
      </form>
      {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default SubmitReportPage;

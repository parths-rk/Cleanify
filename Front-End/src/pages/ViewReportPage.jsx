import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./ViewReportPage.module.css";

function ViewReportPage() {
  const [reports, setReports] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/reports");
        setReports(res.data);
      } catch (err) {
        setMessage(err.response?.data?.error || "Failed to fetch reports");
      }
    };
    fetchReports();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Community Reports</h2>
      {message && <p className={styles.message}>{message}</p>}
      <ul className={styles.cardContainer}>
        {reports.length === 0 && !message && <p>No reports yet.</p>}
        {reports.map((report) => (
          <li key={report._id} className={styles.card}>
            <h3>{report.title}</h3>
            <p>{report.description}</p>
            <p>📍 {report.location}</p>
            {report.imageUrl && (
              <img
                src={report.imageUrl}
                alt={report.title}
                style={{ width: "100%", borderRadius: "6px", marginTop: "8px" }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewReportPage;

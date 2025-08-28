import React from "react";
import styles from "./ReportCard.module.css";

function ReportCard({ report }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{report.title}</h3>
      <p className={styles.cardText}>{report.description}</p>
      <p className={styles.cardText}><strong>Location:</strong> {report.location}</p>
      {report.imageUrl && (
        <img
          src={report.imageUrl}
          alt={report.title}
          className={styles.cardImage}
        />
      )}
    </div>
  );
}

export default ReportCard;

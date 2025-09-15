import React from "react";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Cleanify🌿🗑️</h1>
      <p className={styles.paragraph}>
        Welcome to Cleanify! Cleanify is a platform designed to help communities
        <strong> report and manage waste issues efficiently</strong>. Our
        mission is to <strong>make neighborhoods cleaner and healthier</strong>{" "}
        by empowering citizens to take action.🌍✅
      </p>
      <h2 className={styles.subTitle}>Features🧹♻️:</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          Report Waste Easily📝📍📸: Submit waste reports with a title, description,
          location, and image.
        </li>
        <li className={styles.listItem}>
          View Community Reports👀🏘️: Stay informed about waste issues in your area.
        </li>
        <li className={styles.listItem}>
          User-Friendly Interface💻✨: Simple, clean, and responsive design.
        </li>
        <li className={styles.listItem}>
          Secure & Private🔒: User authentication ensures your data is safe.
        </li>
      </ul>

      <h2 className={styles.subTitle}>How it Works⚡:</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>Register or log in to your account🧑‍💻🔑.</li>
        <li className={styles.listItem}>
          Submit a waste report with details and an image📝📸.
        </li>
        <li className={styles.listItem}>
          Track reports submitted by you and other community members✅🌿.
        </li>
      </ul>

      <p className={`${styles.paragraph} ${styles.centerText}`}>
        Join Cleanify Today🌟  Be part of a community working towards{" "}
        <strong>cleaner, safer, and greener neighborhoods🏘️🌳♻️</strong>!
      </p>
    </div>
  );
}

export default HomePage;

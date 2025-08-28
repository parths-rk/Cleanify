import React from "react";
import styles from "./HomePage.module.css";

function HomePage(){
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome to Cleanify</h1>
            <p className={styles.subtitle}>Track and report waste disposal in your area.</p>
        </div>
    );
}

export default HomePage;
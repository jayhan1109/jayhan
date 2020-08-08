import React from "react";
import styles from "../../styles/pages/about.module.scss";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.imageContainer}></div>
      </div>
      <div className={styles.name}>
        <span className={styles.firstName}>Jay</span>
        <span className={styles.lastName}>Han</span>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import styles from "../../styles/pages/home.module.scss";
import cn from "classnames";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.greetingContainer}>
        <h2 className={cn(styles.greeting)}>
          Hello,
          <br />
          I'm
          <br />
          <span className={styles.name}>
            <span>J</span>
            <span>a</span>
            <span>y</span>
            <span> </span>
            <span>H</span>
            <span>a</span>
            <span>n</span>
          </span>
        </h2>
      </div>
      <div className={styles.shapeContainer}>
        <div className={cn(styles.shape, styles.s1)}></div>
        <div className={cn(styles.shape, styles.s2)}></div>
        <div className={cn(styles.shape, styles.s3)}></div>
        <div className={cn(styles.shape, styles.s4)}></div>
        <div className={cn(styles.shape, styles.s5)}></div>
      </div>
    </div>
  );
};

export default Home;

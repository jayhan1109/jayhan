import React, { useState } from "react";
import styles from "../../styles/navbar/navbar.module.scss";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation().pathname;
  console.log(location);
  const [activeLogo, setActiveLogo] = useState(location);
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <i
            className={`${
              activeLogo === "/" && styles.activeLogo
            } fas fa-home `}
            onClick={() => setActiveLogo("/")}
          ></i>
        </Link>
        <Link to="/about">
          <i
            className={`${
              activeLogo === "/about" && styles.activeLogo
            } fas fa-user`}
            onClick={() => setActiveLogo("/about")}
          ></i>
        </Link>
        <Link to="/project">
          <i
            className={`${
              activeLogo === "/project" && styles.activeLogo
            } fas fa-file-code`}
            onClick={() => setActiveLogo("/project")}
          ></i>
        </Link>
        <Link to="/contact">
          <i
            className={`${
              activeLogo === "/contact" && styles.activeLogo
            } fas fa-envelope`}
            onClick={() => setActiveLogo("/contact")}
          ></i>
        </Link>
      </div>
      <div className={styles.social}>
        <a
          href="https://github.com/jayhan1109"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialBtn}
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jayhan1109/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialBtn}
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://instagram.com/jayhan1109"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialBtn}
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com/jayhan1109"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialBtn}
        >
          <i className="fab fa-facebook-f"></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;

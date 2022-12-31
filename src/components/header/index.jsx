import React, { useState } from "react";
import styles from "../header/index.module.scss";

const Header = () => {
  const [barsClick, setBarsClick] = useState(false);

  return (
    <>
      <header>
        <div className={styles["topnav"]}>
          <a
            href="#home"
            title={
              "This portfolio is created using React Js, JavaScript, CSS-SASS, Styled-Components"
            }
          >
            <span className={styles["header-nameSpan"]}>Omkar Savalkar </span>
            <span className={styles["header-nameSpanArrow"]}>{`>>>`}</span>
          </a>
          <div className={styles["bars"]}>
            <button
              className={styles["btn"]}
              onClick={() => setBarsClick(!barsClick)}
            >
              <i className="fa fa-bars"></i>
            </button>
          </div>
          <div
            className={
              barsClick ? styles["topnav-rightMobile"] : styles["topnav-right"]
            }
          >
            <a href="#search">Contact</a>
            <a href="#search">Project</a>
            <a href="#search">Skills</a>
            <a href="#about">About</a>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;

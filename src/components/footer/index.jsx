import React from "react";
import ScrollIndicator from "../common/scrollIndicator";
import styles from "../footer/index.module.scss";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#272727",
        marginTop: "3%",
        borderTop: "2px solid wheat",
        position: "relative",
        bottom: 0,
        paddingBottom: "1px",
      }}
    >
      <div style={{ rotate: "180deg" }}>
        <ScrollIndicator />
      </div>
      <div className={styles["footer-MaincontactDiv"]}>
        <div className={styles["footer-contactInfo"]}>
          <i className="fa fa-envelope" style={{ marginRight: "5px" }} />{" "}
          omkarsavalkar22@gmail.com
        </div>
        <div className={styles["footer-contactInfo"]}>
          <i className="fa fa-phone" style={{ marginRight: "5px" }} />
          +91-9766112890
        </div>
        <div className={styles["footer-contactInfo"]}>
          <i className="fa fa-github" style={{ marginRight: "5px" }} />
          <a
            href="https://github.com/OmkarSavalkar"
            style={{ color: "#a0a0a0" }}
          >
            https://github.com/OmkarSavalkar
          </a>
        </div>
        <div className={styles["footer-contactInfo"]}>
          <i
            className="fa fa-linkedin-square "
            style={{ marginRight: "5px" }}
          />
          <a
            href="http://www.linkedin.com/in/omkar-savalkar"
            style={{ color: "#a0a0a0" }}
          >
            http://www.linkedin.com/in/omkar-savalkar
          </a>
        </div>
      </div>
      <hr
        style={{
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      ></hr>
      <p style={{ fontSize: "15px", color: "gray" }}>
        <i className="fa fa-copyright " style={{ marginRight: "5px" }} />
        Copyright 2023. Made by Omkar Savalkar
      </p>
    </div>
  );
};
export default Footer;

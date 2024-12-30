import React from "react";
import ScrollIndicator from "../common/scrollIndicator";

const Footer = () => {
  return (
    <div
      style={{
        marginTop: "0",
        position: "relative",
        bottom: 0,
        paddingBottom: "1px",
      }}
    >
      <div style={{ rotate: "180deg" }}>
        <ScrollIndicator />
      </div>
      <p style={{ fontSize: "12px", color: "white", paddingTop: "30px" }}>
        <i className="fa fa-copyright " style={{ marginRight: "5px" }} />
        Copyright 2023. Made by Omkar Savalkar
      </p>
    </div>
  );
};
export default Footer;

import React from "react";

const SocialIcons = (props) => {
  return (
    <>
      {/* <button
        style={{
          margin: "25px 30px 20px 0px",
          backgroundColor: "#7df9ff",
          borderRadius: 10,
          width: "38px",
          height: "38px",
          padding: "3px",
          cursor: "pointer",
        }}
      > */}
      <i
        className={`${props.class} fa-2x`}
        title={props.tooltip}
        style={{
          color: "aqua",
          margin: "25px 30px 20px 0px",
          cursor: "pointer",
        }}
      ></i>
      {/* </button> */}
    </>
  );
};
export default SocialIcons;

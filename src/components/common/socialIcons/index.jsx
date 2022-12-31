import React from "react";

const SocialIcons = (props) => {
  const { iconClass, tooltip } = props;
  const openUrl = (iconName) => {
    iconName === "GitHub"
      ? window.open("https://github.com/OmkarSavalkar", "_blank")
      : iconName === "Gmail"
      ? window.open(
          "mailto:omkarsavalkar22@gmail.com?subject=SendMail&body=Description"
        )
      : window.open("https://www.linkedin.com/in/omkar-savalkar", "_blank");
  };

  return (
    <>
      <i
        className={`${iconClass} fa-2x`}
        title={tooltip}
        style={{
          color: "aqua",
          margin: "15px 30px 20px 0px",
          cursor: "pointer",
        }}
        onClick={() => openUrl(tooltip)}
      ></i>
      {/* </button> */}
    </>
  );
};
export default SocialIcons;

import React from "react";

const SocialIcons = (props) => {
  const { icon, tooltip } = props;
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
      <img
        src={icon}
        alt="icon pic"
        width={"32px"}
        height={"32px"}
        style={{ margin: "15px 30px 20px 0px", cursor: "pointer" }}
        title={tooltip}
        onClick={() => openUrl(tooltip)}
      />
    </>
  );
};
export default SocialIcons;

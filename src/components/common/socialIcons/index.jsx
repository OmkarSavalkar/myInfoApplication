import React from "react";
import style from "../../common/socialIcons/index.module.css";

const SocialIcons = (props) => {
  const { icon, tooltip } = props;
  const openUrl = (iconName) => {
    iconName === "GitHub"
      ? window.open("https://github.com/OmkarSavalkar", "_blank")
      : iconName === "Gmail"
      ? window.open(
          "mailto:omkarsavalkar22@gmail.com?subject=SendMail&body=Description"
        )
      : iconName === "Instagram"
      ? window.open("https://www.instagram.com/omkar.s22/", "_blank")
      : window.open("https://www.linkedin.com/in/omkar-savalkar", "_blank");
  };

  return (
    <>
      <img
        src={icon}
        alt="icon pic"
        width={"31px"}
        height={"31px"}
        className={style["logoStyle"]}
        title={tooltip}
        onClick={() => openUrl(tooltip)}
        // whileHover={{ scale: 1.2, rotate: 360 }}
        // transition={{ ease: "linear", duration: 2, repeat: Infinity }}
        // whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
      />
    </>
  );
};
export default SocialIcons;

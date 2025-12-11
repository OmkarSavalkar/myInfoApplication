import style from "../../common/socialIcons/index.module.css";

const SocialIcons = (props) => {
  const { icon, tooltip } = props;
  const openUrl = (iconName) => {
    iconName === "GitHub"
      ? window.open("https://github.com/OmkarSavalkar", "_blank")
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
      />
    </>
  );
};
export default SocialIcons;

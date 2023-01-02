import React from "react";
import Ratings from "./ratings";
import styles from "../skillsDiv/index.module.scss";

const SkillsDiv = (props) => {
  const { skillName, rate, barColor, iconLink } = props;
  return (
    <div className={styles["main-skill"]}>
      <span style={{ fontSize: "1.04rem" }}>{skillName}</span>

      <div className={styles["skill-iconDiv"]}>
        <img
          src={iconLink}
          alt="skill logo"
          className={styles["skills-logos"]}
        />
      </div>
      <Ratings bgcolor={barColor} rate={rate} />
    </div>
  );
};
export default SkillsDiv;

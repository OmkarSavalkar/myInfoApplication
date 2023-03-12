import React from "react";
import Ratings from "./ratings";
import styles from "../skillsDiv/index.module.scss";
import { motion } from "framer-motion";

const itemAnimate = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const SkillsDiv = (props) => {
  const { skillName, rate, barColor, iconLink } = props;
  return (
    <motion.div variants={itemAnimate} className={styles["main-skill"]}>
      <span style={{ fontSize: "1.06rem" }}>{skillName}</span>

      <div className={styles["skill-iconDiv"]}>
        <img
          src={iconLink}
          alt="skill logo"
          className={styles["skills-logos"]}
        />
      </div>
      <Ratings bgcolor={barColor} rate={rate} />
    </motion.div>
  );
};
export default SkillsDiv;

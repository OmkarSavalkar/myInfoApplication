import React from "react";
import SkillsDiv from "../common/skillsDiv";
import styles from "../skills/index.module.scss";
import skillData from "../../JSON/skill_Icon_JSON.json";
import ScrollIndicator from "../common/scrollIndicator";
import SectionTitleComponent from "../common/sectionTitle";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.35,
      staggerChildren: 0.35,
    },
  },
};

const Skills = (props) => {
  const { lightMode } = props;
  return (
    <div style={{ position: "relative" }}>
      <SectionTitleComponent
        sectionTitle="Skills"
        sectionDescription={
          "Showcasing my technological palette in terms of Frontend"
        }
        lightMode={lightMode}
      />
      <motion.div
        className={styles["flex-container"]}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {skillData &&
          skillData.map((item, index) => {
            return (
              <SkillsDiv
                key={index}
                skillName={item?.skillName}
                rate={item?.skillRating}
                barColor={item?.barColor}
                iconLink={item?.iconUrl}
              />
            );
          })}
      </motion.div>
      <ScrollIndicator />
    </div>
  );
};

export default Skills;

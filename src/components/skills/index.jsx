import React from "react";
import SkillsDiv from "../common/skillsDiv";
import styles from "../skills/index.module.scss";
import skillData from "../../JSON/skill_Icon_JSON.json";
import ScrollIndicator from "../common/scrollIndicator";
import SectionTitleComponent from "../common/sectionTitle";

const Skills = (props) => {
  const { lightMode } = props;
  return (
    <div style={{ position: "relative" }}>
      <SectionTitleComponent
        sectionTitle="Skills"
        sectionDescription={
          "My current skills in terms of programming and technology mostly related to front end"
        }
        lightMode={lightMode}
      />
      <div className={styles["flex-container"]}>
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
      </div>
      <ScrollIndicator />
    </div>
  );
};

export default Skills;

import React from "react";
import { SectionSubTitle, SectionTitle } from "../../styledComponents";
import SkillsDiv from "../common/skillsDiv";
import styles from "../skills/index.module.scss";
import skillData from "../../images/skill_Icon_JSON.json";

const Skills = () => {
  return (
    <div>
      <SectionTitle>Skills</SectionTitle>
      <SectionSubTitle>
        My current skills in terms of programming and technology mostly related
        to front end
      </SectionSubTitle>
      <div className={styles["flex-container"]}>
        {skillData &&
          skillData.map((item) => {
            return (
              <SkillsDiv
                skillName={item?.skillName}
                rate={item?.skillRating}
                barColor={item?.barColor}
                iconLink={item?.iconUrl}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Skills;

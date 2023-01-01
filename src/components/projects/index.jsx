import React from "react";
import SectionTitleComponent from "../common/sectionTitle";
import styles from "../projects/index.module.scss";
import projectData from "../../JSON/projects.json";
import DisplayProject from "../common/displayProjects";

const Projects = () => {
  return (
    <div style={{ position: "relative" }}>
      <div>
        <SectionTitleComponent
          sectionTitle="Projects"
          sectionDescription={
            "Here you will find some of the personal and clients projects that I created with each project containing its overview"
          }
        />
        <SectionTitleComponent
          sectionDescription={
            "( This portfolio is also a Responsive web-application project developed using React Js, JavaScript, SASS-CSS, Styled-Components )"
          }
        />
      </div>
      <div className={styles["mainProject-grid"]}>
        {projectData &&
          projectData?.map((item, index) => {
            return <DisplayProject data={item} key={index} />;
          })}
      </div>
    </div>
  );
};
export default Projects;

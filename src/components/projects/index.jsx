import React from "react";
import SectionTitleComponent from "../common/sectionTitle";

const Projects = () => {
  return (
    <div style={{ position: "relative" }}>
      <SectionTitleComponent
        sectionTitle="Projects"
        sectionDescription={
          "Here you will find some of the personal and clients projects that I created with each project containing its overview"
        }
      />
    </div>
  );
};
export default Projects;

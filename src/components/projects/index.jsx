import React from "react";
import SectionTitleComponent from "../common/sectionTitle";
import styles from "../projects/index.module.scss";
import projectData from "../../JSON/projects.json";
import DisplayProject from "../common/displayProjects";
import { SectionSubTitle } from "../../styledComponents";

const Projects = (props) => {
  const { lightMode } = props;
  return (
    <div style={{ position: "relative" }}>
      <div>
        <div>
          <SectionTitleComponent
            sectionTitle="Projects"
            sectionDescription={
              "Venture into my collection of personal and client projects with overviews"
            }
            lightMode={lightMode}
          />
        </div>
        <div id="modalMain"></div>
        <div className={styles["mainProject-grid"]}>
          {projectData &&
            projectData?.map((item, index) => {
              return <DisplayProject data={item} key={index} />;
            })}
        </div>
      </div>
      <div className={styles["this-project"]}>
        <SectionSubTitle>
          <img
            src="data:image/png;base64,R0lGODlhDwAPAKIHAP9mAP/MAMxmAP+ZAP//AMyZAP+ZM////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFMgAHACwAAAAADwAPAAADKni63P7wiNgmVaJYKsyuQlgYWvhJo6GSJ5ax7dKNsaxpUTbpUCjXl+AiAQAh+QQFMgAHACwAAAAADwAPAAADQHi6B8yDAeJWVLXRlSUJQfc0YDgC6FQOqTMRcBnAMNsMcm5jeB7snI8M2ND8ADibI6JSfmyXCVDaSWEwqJFFmwAAOw=="
            alt="star emoji"
            style={{ marginRight: "4px" }}
          />
          ( This portfolio is also a Responsive web-application (self made)
          developed using React Js, JavaScript, SASS-CSS, Styled-Components )
          <img
            src="data:image/png;base64,R0lGODlhDwAPAKIHAP9mAP/MAMxmAP+ZAP//AMyZAP+ZM////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFMgAHACwAAAAADwAPAAADKni63P7wiNgmVaJYKsyuQlgYWvhJo6GSJ5ax7dKNsaxpUTbpUCjXl+AiAQAh+QQFMgAHACwAAAAADwAPAAADQHi6B8yDAeJWVLXRlSUJQfc0YDgC6FQOqTMRcBnAMNsMcm5jeB7snI8M2ND8ADibI6JSfmyXCVDaSWEwqJFFmwAAOw=="
            alt="star emoji"
            style={{ marginLeft: "4px" }}
          />
        </SectionSubTitle>
      </div>
    </div>
  );
};
export default Projects;

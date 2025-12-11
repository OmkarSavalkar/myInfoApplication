import SectionTitleComponent from "../common/sectionTitle";
import styles from "../projects/index.module.scss";
import projectData from "../../JSON/projects.json";
import DisplayProject from "../common/displayProjects";

const Projects = (props) => {
  const { lightMode } = props;
  return (
    <div style={{ position: "relative" }}>
      <div>
        <div>
          <SectionTitleComponent
            sectionTitle="Projects"
            sectionDescription={
              "Every project is a story of challenges faced, solutions crafted, and experiences delivered"
            }
            lightMode={lightMode}
          />
        </div>
        <div id="modalMain"></div>
        <div className={styles["mainProject-grid"]}>
          {projectData &&
            projectData?.map((item, index) => {
              return (
                <DisplayProject data={item} key={index} lightMode={lightMode} />
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default Projects;

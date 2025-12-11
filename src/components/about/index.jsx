import styles from "../about/index.module.scss";
import SocialIcons from "../common/socialIcons";
import EmployerCarousel from "./employerCarousel";
import SectionTitleComponent from "../common/sectionTitle";

const About = (props) => {
  const { lightMode } = props;

  return (
    <div id="aboutId" style={{ position: "relative", top: 2 }}>
      <div className={styles["about"]}>
        <SectionTitleComponent
          lightMode={lightMode}
          sectionTitle="About Me"
          sectionDescription={
            "Problem Solver | Growth Enthusiast | Mentor & Team Lead"
          }
        />
      </div>
      <div className={styles["about-grid"]}>
        <div
          className={styles["about-profiledescription"]}
          style={{ color: lightMode ? "grey" : "white" }}
        >
          <p>
            I’m a Frontend Engineer with 4.5 years of experience building
            high-performance, scalable, and user-centric web applications using
            React, Vue, and Next.js. <br></br>I currently work at Cavista
            (Axxess), contributing to enterprise healthcare platforms used by
            9,000+ care organizations and millions of patients across the USA &
            UAE. With hands-on expertise in UI architecture, performance
            optimization, reusable component design, and end-to-end feature
            ownership, I focus on translating complex requirements into clean,
            maintainable, and impactful digital experiences.<br></br> Previously
            at Xoriant, I engineered production-grade interfaces for U.S.
            clients and was recognized with the Xoriant Spot Award. I hold a
            Computer Engineering degree (2021) and constantly push myself to
            stay on top of modern web development.
            <br></br>
            <br></br>let's connect on{" "}
            <a
              href="https://www.linkedin.com/in/omkar-savalkar"
              target="_blank"
              style={{
                color: lightMode ? "navy" : "yellow",
                paddingRight: "4px",
              }}
              rel="noreferrer"
            >
              Linkedin
            </a>
            💻🚀 and build something extraordinary together!
          </p>
        </div>
        <div>
          <div style={{ marginLeft: "20px" }}>
            <SocialIcons
              icon="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
              tooltip="LinkedIn"
            />
            <SocialIcons
              icon="https://cdn-icons-png.flaticon.com/512/1051/1051275.png"
              tooltip="GitHub"
            />
          </div>
        </div>
      </div>
      <div className={styles["about-employer-carousel"]}>
        <div style={{ margin: "5px 2% 20px 2%" }}>
          <EmployerCarousel lightMode={lightMode} />
        </div>
      </div>
    </div>
  );
};
export default About;

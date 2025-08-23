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
          sectionDescription={"Problem Solver | Growth Enthusiast | Team Lead"}
        />
      </div>
      <div className={styles["about-grid"]}>
        <div
          className={styles["about-profiledescription"]}
          style={{ color: lightMode ? "grey" : "white" }}
        >
          <p>
            I’m a software engineer with 4+ years of experience building
            dynamic, user-focused web applications using React and Vue.
            Currently based in Pune, India, I’m shaping cutting-edge digital
            experiences at Cavista Technology, a leading US healthcare product
            company. A proud recipient of the Xoriant Spot Award, I bring
            together creativity and technical expertise to transform ideas into
            scalable, high-performance solutions. With a Computer Engineering
            degree (2021) and a passion for continuous learning, I thrive on
            challenges that push the boundaries of web development.
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
            <SocialIcons
              icon="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png"
              tooltip="Instagram"
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

import React from "react";
import styles from "../about/index.module.scss";
import myAvatar from "../../images/mypic1.jpg";
import SocialIcons from "../common/socialIcons";
import EmployerCarousel from "./employerCarousel";
import SectionTitleComponent from "../common/sectionTitle";

const About = () => {
  return (
    <div id="aboutId" style={{ position: "relative", top: 2 }}>
      <div className={styles["about"]}>
        <SectionTitleComponent
          sectionTitle="About Me"
          sectionDescription={"Unveiling the Person Behind the Pixels"}
        />
      </div>
      <div className={styles["about-grid"]}>
        <div className={styles["about-profileImage"]}>
          <img src={myAvatar} alt="Avatar" className={styles["avatar"]} />
          <div>
            <span style={{ color: "white" }}>Omkar Savalkar</span>
          </div>
          <div style={{ marginLeft: "20px" }}>
            <SocialIcons
              icon="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png"
              tooltip="Instagram"
            />
            <SocialIcons
              icon="https://cdn-icons-png.flaticon.com/512/1051/1051275.png"
              tooltip="GitHub"
            />

            <SocialIcons
              icon="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
              tooltip="LinkedIn"
            />
          </div>
        </div>
        <div className={styles["about-profiledescription"]}>
          <p>
            😇 I am a passionate Software Engineer based in Pune, India, driving
            digital excellence at Cavista (Axxess). With a Computer Engineering
            degree (2021) and around 3 years of experience as a Frontend
            Developer in React and Vue. I've even earned the Xoriant Spot Award.
            My journey blends creativity and logic, turning ideas into dynamic
            web applications. I'm constantly seeking innovation and new
            challenges to fuel my growth.
            <br></br>
            <br></br>
            <br></br>let's connect on{" "}
            <a
              href="https://www.linkedin.com/in/omkar-savalkar"
              target="_blank"
              style={{ color: "yellow", paddingRight: "4px" }}
              rel="noreferrer"
            >
              Linkedin
            </a>
            💻🚀 and work together
          </p>
        </div>
      </div>
      <div>
        <SectionTitleComponent
          sectionDescription={"Companies I've Worked With"}
        />
        <div style={{ margin: "5px 50px 20px 50px" }}>
          <EmployerCarousel />
        </div>
      </div>
    </div>
  );
};
export default About;

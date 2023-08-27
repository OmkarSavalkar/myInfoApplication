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
          sectionTitle="About"
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
              icon="https://cdn-icons-png.flaticon.com/512/5321/5321274.png"
              tooltip="Gmail"
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
            😇 I am a passionate Software Engineer based in Pune India,
            currently amplifying digital excellence at Cavista (Axxess). Armed
            with a Computer Engineering degree (2021) and 2 prolific years as a
            Frontend developer (React & Vue), even clinching the prestigious
            Xoriant Spot Award. My journey melds creativity and logic, sculpting
            web applications from mere ideas and designs. As an avid seeker of
            innovation, I'm on the prowl for a stage that nurtures new
            challenges and fuels exponential growth. Delving deeper into
            coding's symphony, mastering emerging tech with frontend skills is
            my call.
            <br></br>
            <br></br>I'm Eager to reshape the digital realm, let's connect on{" "}
            <a
              href="https://www.linkedin.com/in/omkar-savalkar"
              target="_blank"
              style={{ color: "yellow", paddingRight: "4px" }}
              rel="noreferrer"
            >
              Linkedin
            </a>
            💻🚀
          </p>
        </div>
      </div>
      <div>
        <SectionTitleComponent
          sectionDescription={"Contributed in growth of following companies"}
        />
        <div style={{ margin: "5px 50px 20px 50px" }}>
          <EmployerCarousel />
        </div>
      </div>
    </div>
  );
};
export default About;

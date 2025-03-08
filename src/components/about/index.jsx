import React, { useEffect, useState } from "react";
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
          sectionDescription={"Unveiling the Person Behind the Pixels"}
        />
      </div>
      <div className={styles["about-grid"]}>
        <div
          className={styles["about-profiledescription"]}
          style={{ color: lightMode ? "grey" : "white" }}
        >
          <p>
            Frontend Developer. Problem Solver. Growth Enthusiast.
            <br />I am software engineer with over 3+ years of experience
            developing exceptional web applications using <b>React</b> and{" "}
            <b>Vue</b>. Based in Pune, India, I am currently shaping digital
            experiences at Cavista Technology (US healthcare product-based
            company). A proud recipient of the Xoriant Spot Award, I combine
            creativity and technical expertise to transform ideas into
            innovative solutions. With a Computer Engineering degree (2021) and
            a passion for continuous growth and learning, I thrive on tackling
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

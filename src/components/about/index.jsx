import React from "react";
import styles from "../about/index.module.scss";
import myAvatar from "../../images/mypic1.jpg";
import SocialIcons from "../common/socialIcons";
import { SectionTitle, SectionSubTitle } from "../../styledComponents";
import EmployerCarousel from "./employerCarousel";
import ScrollIndicator from "../common/scrollIndicator";

const About = () => {
  return (
    <div id="aboutId" style={{ position: "relative", top: 2 }}>
      <div className={styles["about"]}>
        <SectionTitle>About</SectionTitle>
      </div>
      <SectionSubTitle>Here you will get to know me</SectionSubTitle>
      <div className={styles["about-grid"]}>
        <div className={styles["about-profileImage"]}>
          <img src={myAvatar} alt="Avatar" className={styles["avatar"]} />
          <div>
            <span style={{ color: "white" }}>Omkar Savalkar</span>
          </div>
          <div style={{ marginLeft: "20px" }}>
            <SocialIcons iconClass="fa fa-github" tooltip="GitHub" />
            <SocialIcons iconClass="fa fa-envelope-o" tooltip="Gmail" />
            <SocialIcons iconClass="fa fa-linkedin-square" tooltip="LinkedIn" />
          </div>
        </div>
        <div className={styles["about-profiledescription"]}>
          <p>
            I'm Computer Software Engineer currently living in Pune(Maharashtra,
            India). I had completed my Bachelor's of Computer Engineering degree
            in 2021 and have strong work experience of 1.7 years as Front end
            developer with proven quick learning, logic building and team player
            ability. Achieved Spot Award for best performance in Xoriant(current
            company) and have knowledge of working on web application
            development projects from scratch during job tenure using frontend
            react-javascript skills. <br></br>
            <br></br> Recently, I had started seeking for more job opportunities
            in a reputed firm where I can code more, learn new techs, challenge
            myself, and experience a more exciting work culture. <br></br> Feel
            free to Connect me on{" "}
            <a
              href="https://www.linkedin.com/in/omkar-savalkar"
              target="_blank"
              style={{ color: "DodgerBlue", paddingRight: "4px" }}
              rel="noreferrer"
            >
              Linkedin
            </a>
            or mail{" "}
            <span style={{ color: "DodgerBlue" }}>
              omkarsavalkar22@gmail.com
            </span>
          </p>
        </div>
      </div>
      <div>
        <SectionSubTitle>
          Experienced working with my Past Employers
        </SectionSubTitle>
        <div style={{ margin: "5px 50px 20px 50px" }}>
          <EmployerCarousel />
        </div>
      </div>
      <ScrollIndicator />
    </div>
  );
};
export default About;

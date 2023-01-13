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
          sectionDescription={"Here you will get to know me"}
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
              icon="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-256.png"
              tooltip="Instagram"
            />
            <SocialIcons
              icon="https://cdn-icons-png.flaticon.com/512/1051/1051275.png"
              tooltip="GitHub"
            />
            <SocialIcons
              icon="https://cdn-icons-png.flaticon.com/512/5321/5321274.png"
              tooltip="Gmail"
            />
            <SocialIcons
              icon="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
              tooltip="LinkedIn"
            />
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
            react-javascript skills. 😇 <br></br>
            <br></br> Recently, I had started seeking for more job opportunities
            in a reputed firm where I can code more, learn new techs, challenge
            myself, and experience a more exciting work culture. <br></br> Feel
            free to Connect me on{" "}
            <a
              href="https://www.linkedin.com/in/omkar-savalkar"
              target="_blank"
              style={{ color: "yellow", paddingRight: "4px" }}
              rel="noreferrer"
            >
              Linkedin
            </a>
          </p>
        </div>
      </div>
      <div>
        <SectionTitleComponent
          sectionDescription={
            "Contributed in growth of following reputed companies"
          }
        />
        <div style={{ margin: "5px 50px 20px 50px" }}>
          <EmployerCarousel />
        </div>
      </div>
    </div>
  );
};
export default About;

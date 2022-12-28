import React from "react";
import SocialIcons from "../common/socialIcons";
import styles from "./index.module.scss";

const MainContainer = () => {
  return (
    <div className={styles["main-div"]}>
      <div className={styles["main-subdiv1"]}>
        <div className={styles["main-role"]}>
          {"Front End Developer".toUpperCase()}
          <div className={styles["main-name"]}>
            <span className={styles["wave"]}>👋 </span>Hey, I'm Omkar Savalkar
            <div className={styles["main-shortdescription"]}>
              A Frontend focused Web Developer who enjoys building the frontend
              of everything from small business websites to rich interactive Web
              Applications that leads to the success of the overall product
              <div>
                <SocialIcons class="fa fa-github" tooltip="GitHub" />
                <SocialIcons class="fa fa-envelope-o" tooltip="Gmail" />
                <SocialIcons class="fa fa-linkedin-square" tooltip="LinkedIn" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["main-subdiv2"]}>2</div>
    </div>
  );
};

export default MainContainer;

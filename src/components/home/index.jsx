import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import blob5 from "../../images/blob2.png";
import blob1 from "../../images/blob1.png";
import image1 from "../../images/My project4.png";
import myResume from "../../resumeDownload/Resume Omkar Savalkar.pdf";
import ScrollIndicator from "../common/scrollIndicator";
import { StyledButton } from "../../styledComponents";
import Typed from "react-typed";
import Confetti from "react-confetti";

const Home = (props) => {
  const { lightMode } = props;
  const [mode, setMode] = useState(lightMode);

  const download_file = () => {
    document.getElementById("my_download").click();
  };

  useEffect(() => {
    setMode(!lightMode);
  }, [lightMode]);

  return (
    <div>
      <Confetti recycle={true} gravity={0.02} numberOfPieces={60} />
      <div className={styles["main-div"]}>
        <div className={styles["main-subdiv1"]}>
          <div className={styles["main-role"]}>
            <span style={{ color: mode ? "aqua" : "navy" }}>
              FRONTEND DEVELOPER
            </span>
            <div
              className={styles["main-name"]}
              style={{ color: mode ? "white" : "grey" }}
            >
              <span className={styles["wave"]}>👋 </span>Hey, I'm
              <Typed
                strings={["  Omkar Savalkar"]}
                typeSpeed={150}
                backSpeed={150}
                backDelay={3000}
                loop
              />
              <div
                className={styles["main-shortdescription"]}
                style={{ color: mode ? "white" : "grey" }}
              >
                A Frontend focused Web Developer who enjoys building the
                frontend of everything from small business websites to rich
                interactive Web Applications that leads to the success of the
                overall product
                <div className={styles["resume-div"]}>
                  <a
                    id="my_download"
                    href={myResume}
                    download="Omkar Savalkar Resume"
                    style={{ display: "none" }}
                  >
                    a
                  </a>
                  <StyledButton
                    lightMode={lightMode}
                    buttonMargin={"20px"}
                    onClick={() => download_file()}
                  >
                    Download Resume <i className="fa fa-download" />
                  </StyledButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["main-subdiv2"]}>
          <div style={{ position: "relative" }}>
            <img src={blob5} alt="blob2" className={styles["blob-images1"]} />
            <img src={blob1} alt="blob2" className={styles["blob-images2"]} />
            <img
              src={image1}
              alt="image1"
              className={styles["blob-Myimages1"]}
            />
          </div>
        </div>
        <ScrollIndicator />
      </div>
    </div>
  );
};

export default Home;

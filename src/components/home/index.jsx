import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import blob5 from "../../images/blob2.png";
import blob1 from "../../images/blob1.png";
import image1 from "../../images/My project4.png";
import myResume from "../../resumeDownload/Omkar Savalkar_Resume.pdf";
import ScrollIndicator from "../common/scrollIndicator";
import { StyledButton } from "../../styledComponents";
import Confetti from "react-confetti";
import { Typewriter } from "react-simple-typewriter";

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
              <Typewriter
                words={["  Omkar Savalkar"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={150}
                deleteSpeed={150}
                delaySpeed={3000}
              />
              <div
                className={styles["main-shortdescription"]}
                style={{ color: mode ? "white" : "grey" }}
              >
                Passionate about performance and design, I create user-centric
                applications with React.js, Vue.js, Next.js and modern web
                technologies that drive product success
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

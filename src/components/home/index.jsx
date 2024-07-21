import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import blob5 from "../../images/blob2.png";
import blob1 from "../../images/blob1.png";
import image1 from "../../images/My project4.png";
import myResume from "../../resumeDownload/Resume Omkar Savalkar.pdf";
import ScrollIndicator from "../common/scrollIndicator";
import { StyledButton } from "../../styledComponents";
import Modal from "react-modal";
import Typed from "react-typed";

const customStyles = {
  content: {
    width: "30%",
    height: "25%",
    top: "50%",
    left: "56%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-60%, -50%)",
    overflow: "auto",
    borderRadius: "20px",
    backgroundColor: "#dbdbdb",
    border: "1px solid black",
  },
};

const Home = (props) => {
  const { lightMode, openMsg } = props;
  const [mode, setMode] = useState(lightMode);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const download_file = () => {
    document.getElementById("my_download").click();
  };

  useEffect(() => {
    if (openMsg) {
      openModal();
      setTimeout(() => {
        setIsOpen(false);
      }, 6000);
    }
  }, [openMsg]);

  useEffect(() => {
    setMode(!lightMode);
  }, [lightMode]);

  return (
    <div>
      <div className={styles["main-div"]}>
        <div className={styles["main-subdiv1"]}>
          <div className={styles["main-role"]}>
            <span style={{ color: mode ? "yelow" : "aqua" }}>
              FRONTEND DEVELOPER
            </span>
            <div className={styles["main-name"]}>
              <span className={styles["wave"]}>👋 </span>Hey, I'm
              <Typed
                strings={["  Omkar Savalkar"]}
                typeSpeed={150}
                backSpeed={150}
                backDelay={3000}
                loop
              />
              <div className={styles["main-shortdescription"]}>
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <img
          src={"https://cdn-icons-png.flaticon.com/512/5369/5369422.png"}
          alt="close"
          width="38px"
          height="38px"
          style={{ float: "right", cursor: "pointer" }}
          onClick={closeModal}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "1.1rem",
              color: "black",
            }}
          >
            <p style={{ margin: "0 auto" }}>Welcome</p>
            <br /> 📌 Increase brightness for better experience <br />
            <br /> 📌 Light and Dark mode available on top-right <br />
            <br></br>
            <span style={{ fontWeight: "bold" }}>Thank you!</span>
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default Home;

import React from "react";
import styles from "../displayProjects/index.module.scss";
import { StyledButton } from "../../../styledComponents";
import Modal from "react-modal";
import { ProjectTitle } from "../../../styledComponents";
import connectWellRecording from "../../../images/dashboard.gif";
import tictactoe from "../../../images/Tictactoe.gif";
import rentManagementRecording from "../../../images/rent-management.gif";

const customStyles = {
  content: {
    width: "80%",
    height: "70%",
    top: "50%",
    left: "56%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-60%, -50%)",
    overflow: "auto",
    borderRadius: "20px",
    backgroundColor: "#bdbdbd",
    border: "2px solid black",
  },
};

const DisplayProject = (props) => {
  const { data, lightMode } = props;

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const sourceImages = (dataImage) => {
    switch (dataImage) {
      case "tic":
        return tictactoe;
      case "connectwell":
        return connectWellRecording;
      case "rentManagement":
        return rentManagementRecording;
      default:
        break;
    }
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div>
        <img
          src={sourceImages(data.image)}
          alt="project pic"
          className={styles["project-image"]}
        />
      </div>
      <div className={styles["project-description"]}>
        <ProjectTitle lightMode={lightMode}>
          {`${data?.projectName}`.toUpperCase()}
        </ProjectTitle>
        <p style={{ color: lightMode ? "grey" : "white" }}>
          {data?.shortDescription}
        </p>
        <StyledButton
          lightMode={lightMode}
          buttonMargin={"3px"}
          title="Click to get detailed information about this project"
          onClick={openModal}
        >
          Overview <i className="fa fa-info-circle" />
        </StyledButton>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img
          src={"https://cdn-icons-png.flaticon.com/512/5369/5369422.png"}
          alt="close"
          width="40px"
          height="40px"
          style={{ float: "right", cursor: "pointer" }}
          onClick={closeModal}
        />
        <p style={{ fontSize: "0.9rem", color: "#424242" }}>
          Here you will get all information about this project which includes my
          Role, Technology Stack, Project Overview and links of self projects
        </p>
        <div
          style={{
            fontFamily: "Sans-serif",
            lineHeight: "2",
            color: "#2F4964",
          }}
        >
          <div className={styles["modal-projectName"]}>
            {`${data?.projectName}`.toUpperCase()}
          </div>
          <div>
            <span className={styles["modal-sectionHeading"]}>Role: </span>
            {data?.role}
          </div>
          <div>
            <span className={styles["modal-sectionHeading"]}>
              Project Overview :{" "}
            </span>
            {data?.overviewDescription}
          </div>
          <div>
            <span className={styles["modal-sectionHeading"]}>
              Technology Stack :{" "}
            </span>
            {data?.tools.map((item, index) => {
              return (
                <span key={index} className={styles["modal-techStack"]}>
                  {item}
                </span>
              );
            })}
          </div>
          {data && Object.hasOwn(data, "liveLink") ? (
            <>
              <div>
                <span className={styles["modal-sectionHeading"]}>
                  Live Project Link :
                  <a
                    href={data?.liveLink}
                    target={"_blank"}
                    style={{ color: "#424242" }}
                    rel="noreferrer"
                  >
                    {data?.liveLink}
                  </a>
                </span>
              </div>
            </>
          ) : (
            <div>
              <span className={styles["modal-sectionHeading"]}>Link : </span>{" "}
              <span style={{ color: "red" }}>
                !!! Link and screen video cannnot be provided since its client
                project !!!
              </span>
            </div>
          )}
          <div>
            <span className={styles["modal-sectionHeading"]}>Video : </span>
            <div
              style={{
                width: "85%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={sourceImages(data.image)}
                alt="project pic"
                className={styles["project-image"]}
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default DisplayProject;

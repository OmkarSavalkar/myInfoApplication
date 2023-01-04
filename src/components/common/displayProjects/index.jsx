import React from "react";
import styles from "../displayProjects/index.module.scss";
import { StyledButton } from "../../../styledComponents";
import asee from "../../../images/asee.png";
import connectwell from "../../../images/connectwell.png";
import Modal from "react-modal";
import { ProjectTitle } from "../../../styledComponents";

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
    backgroundColor: "#dbdbdb",
    border: "1px solid black",
  },
};

const DisplayProject = (props) => {
  const { data, lightMode } = props;

  const [modalIsOpen, setIsOpen] = React.useState(false);

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
          src={data?.image === "asee" ? asee : connectwell}
          alt="project pic"
          className={styles["project-image"]}
        />
      </div>
      <div className={styles["project-description"]}>
        <ProjectTitle mode={lightMode}>
          {`${data?.projectName}`.toUpperCase()}
        </ProjectTitle>
        <p>{data?.shortDescription}</p>
        <StyledButton
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
        <p style={{ fontSize: "0.9rem", color: "gray" }}>
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
                    style={{ color: "gray" }}
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
              Link cannnot be provided since its client project !
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};
export default DisplayProject;

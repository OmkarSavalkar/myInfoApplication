import React from "react";
import styles from "../displayProjects/index.module.scss";
import laptop from "../../../images/laptop.png";
import { StyledButton } from "../../../styledComponents";
import ssImage from "../../../images/ss.png";
import connectwell from "../../../images/connectwell.png";

const DisplayProject = (props) => {
  const { data } = props;

  return (
    <>
      <div>
        <img
          src={data?.image === "asee" ? ssImage : connectwell}
          alt="project pic"
          className={styles["project-image"]}
        />
      </div>
      <div className={styles["project-description"]}>
        <span className={styles["project-name"]}>
          {`${data?.projectName}`.toUpperCase()}
        </span>
        <div>
          <span className={styles["project-role"]}>Role: {data?.role}</span>
        </div>
        <p>{data?.shortDescription}</p>
        <StyledButton
          buttonMargin={"3px"}
          title="Click to get detailed information about this project"
        >
          Overview <i className="fa fa-info-circle" />
        </StyledButton>
      </div>
    </>
  );
};
export default DisplayProject;

import React, { useState } from "react";
import styles from "../header/index.module.scss";
// import myResume from "../../resumeDownload/Resume Omkar Savalkar.pdf";

const Header = () => {
  const [barsClick, setBarsClick] = useState(false);
  // const download_file = () => {
  //   document.getElementById("my_download").click();
  // };

  return (
    <>
      <header>
        <div className={styles["topnav"]}>
          <a
            href="#home"
            title={
              "This portfolio is created using React Js, JavaScript, CSS-SASS, Styled-Components"
            }
          >
            <span className={styles["header-nameSpan"]}>Omkar Savalkar </span>
            <span className={styles["header-nameSpanArrow"]}>{`>>>`}</span>
          </a>
          <div className={styles["bars"]}>
            <button
              className={styles["btn"]}
              onClick={() => setBarsClick(!barsClick)}
            >
              <i className="fa fa-bars"></i>
            </button>
          </div>
          <div
            className={
              barsClick ? styles["topnav-rightMobile"] : styles["topnav-right"]
            }
          >
            {/* <a
              id="my_download"
              href={myResume}
              download="Omkar Savalkar Resume"
            >
              <i className="fa fa-download" style={{ marginRight: "10px" }} />
              Resume Download
            </a> */}
            <a
              href="#search"
              onClick={() => {
                let scroll_to = document.getElementById("contactId").offsetTop;
                window.scrollTo({ behavior: "smooth", top: scroll_to });
              }}
            >
              Contact
            </a>
            <a
              href="#search"
              onClick={() => {
                let scroll_to = document.getElementById("projectId").offsetTop;
                window.scrollTo({ behavior: "smooth", top: scroll_to });
              }}
            >
              Project
            </a>
            <a
              href="#search"
              onClick={() => {
                // let scroll_to = document.getElementById("skillsId").offsetTop;
                // window.scrollTo({ behavior: "smooth", top: scroll_to });
                // console.log("skills clicked");
              }}
            >
              {/* <Link to="/hash-scroll#skillsId">Skills</Link> */}Skills
            </a>
            <a
              href="#aboutId"
              onClick={() => {
                console.log("about clicked");
                let scroll_to = document.getElementById("skillsId").offsetTop;
                window.scrollTo({ behavior: "smooth", top: scroll_to });
              }}
            >
              About
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;

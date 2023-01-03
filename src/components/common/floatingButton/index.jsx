import React, { useState, useEffect } from "react";
import styles from "../floatingButton/index.module.scss";
import FloatingButtons from "react-floating-buttons";
import myResume from "../../../resumeDownload/Resume Omkar Savalkar.pdf";

const FloatingButton = (props) => {
  const { fromHeader } = props;
  const [width, setWidth] = useState(window.innerWidth);
  const [direction, setDirection] = useState("left");

  const download_file = () => {
    document.getElementById("my_download").click();
  };

  const view_file = () => {
    window.open(myResume);
  };

  const linkedin_view = () => {
    window.open("http://www.linkedin.com/in/omkar-savalkar");
  };

  let FltButtons = [
    {
      onClick: () => {
        <a
          id="my_download"
          href={myResume}
          download="Omkar Savalkar Resume"
          style={{ display: "none" }}
        >
          a
        </a>;
        download_file();
      },
      src: "https://cdn-icons-png.flaticon.com/512/1257/1257423.png?w=740&t=st=1672744020~exp=1672744620~hmac=88ee3d318b0babbf2b4461c6029bea23e422edf25ea8ec2942b3c1af23dc66a0",
    },
    {
      onClick: () => {
        view_file();
      },
      src: "https://cdn-icons-png.flaticon.com/512/1077/1077177.png?w=740&t=st=1672744344~exp=1672744944~hmac=902714a1c48021b8145ecea1f9852af78e58ab556049181ab413bd6e86a8ca88",
    },
    {
      onClick: () =>
        alert(
          "\nEmail Id:   omkarsavalkar22@gmail.com \n\nMobile No:   +91-9766112890"
        ),
      src: "https://cdn-icons-png.flaticon.com/512/1034/1034306.png?w=740&t=st=1672744562~exp=1672745162~hmac=480dcaaae09b7ab41bb7d0a7c63cae53e21ebd39c76bf3a2e4b44baa50da7452",
    },
    {
      onClick: () => linkedin_view(),
      src: "https://cdn-icons-png.flaticon.com/512/174/174857.png?w=740&t=st=1672744751~exp=1672745351~hmac=83644de977cc010f4b73d805bb022fd0e5e1e71790db82fc9f93fd154fc41d50",
    },
  ];

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {
    if (width < 680) {
      setDirection("down");
    }
  }, [width]);

  return (
    <div
      className={
        fromHeader ? styles["float-divHeader"] : styles["float-divNormal"]
      }
    >
      <FloatingButtons
        buttonType="hamburge"
        dimension={43}
        buttonsList={FltButtons}
        top={"12px"}
        left={"83%"}
        direction={direction}
        backgroundColor={"aqua"}
        buttonColor="white"
      />
    </div>
  );
};
export default FloatingButton;

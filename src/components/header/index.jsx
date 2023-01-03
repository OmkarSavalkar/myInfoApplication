import React from "react";
import FloatingButton from "../common/floatingButton";
import styles from "../header/index.module.scss";
import ModeToggle from "../common/modeToggle";

const Header = (props) => {
  const { setLightMode, lightMode } = props;
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
          <div className={styles["topnav-right"]}>
            <FloatingButton fromHeader={true} />
          </div>
          <ModeToggle
            fromHeader={true}
            setLightMode={setLightMode}
            lightMode={lightMode}
          />
        </div>
      </header>
    </>
  );
};
export default Header;

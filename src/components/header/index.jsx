import { useEffect } from "react";
import styles from "../header/index.module.scss";
import ModeToggle from "../common/modeToggle";

const Header = (props) => {
  const { setLightMode, lightMode } = props;

  useEffect(() => {}, []);
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
            {/* <span className={styles["header-nameSpan"]}>Omkar Savalkar </span>
            <span className={styles["header-nameSpanArrow"]}>{`>>>`}</span> */}
          </a>
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

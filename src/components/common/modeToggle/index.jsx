import React, { useEffect, useState } from "react";
import styles from "../modeToggle/index.module.scss";

const ModeToggle = (props) => {
  const { fromHeader, setLightMode, lightMode } = props;
  const [checked, setChecked] = useState(true);

  const onToggleChange = () => {
    setLightMode(!lightMode);
  };

  useEffect(() => {
    setChecked(lightMode);
  }, [lightMode]);

  return (
    <>
      <div
        className={fromHeader ? styles["switchHeader"] : styles["switchNormal"]}
      >
        {lightMode ? (
          <input
            type="checkbox"
            checked={checked}
            className={styles["switch__input"]}
            onChange={onToggleChange}
            id="Switch"
          />
        ) : (
          <input
            type="checkbox"
            className={styles["switch__input"]}
            onChange={onToggleChange}
            id="Switch"
          />
        )}

        <label className={styles["switch__label"]} htmlFor="Switch">
          <span className={styles["switch__indicator"]}></span>
          <span className={styles["switch__decoration"]}></span>
        </label>
      </div>
    </>
  );
};
export default ModeToggle;

import React from "react";
import styles from "../employerCarousel/index.module.scss";
import SectionTitleComponent from "../../common/sectionTitle";
import healbyus from "../../../images/healbyus.jpg";

const EmployerCarousel = (props) => {
  const { lightMode } = props;
  return (
    <div>
      <SectionTitleComponent
        lightMode={lightMode}
        sectionDescription={"Companies I've Worked With"}
      />
      <marquee scrollamount="15" className={styles["marqueeLogos"]}>
        <img
          src="https://www.cavistatech.com/wp-content/uploads/2023/06/cavista-logo-2305.svg"
          alt="company logo"
          className={styles["carouselCavista-logos"]}
        />
        <img
          src="https://www.xoriant.com/cdn/ff/h8j4-N1kFokMkyOEiHIQVjpbRE5vP8EOCe4cCjK-sP4/1618405020/public/Xoriant-Logo.png"
          alt="company logo"
          className={styles["carouselXoriant-logos"]}
        />
        <img
          src={healbyus}
          alt="company logo"
          className={styles["carouselCHealByUS-logos"]}
        />
      </marquee>
    </div>
  );
};
export default EmployerCarousel;

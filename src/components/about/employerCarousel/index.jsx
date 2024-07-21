import React from "react";
import Carousel from "better-react-carousel";
import styles from "../employerCarousel/index.module.scss";

const EmployerCarousel = () => {
  return (
    <Carousel
      cols={3}
      rows={1}
      gap={10}
      loop={true}
      showDots={true}
      autoplay={4000}
      dotColorActive={"yellow"}
      mobileBreakpoint={675}
    >
      <Carousel.Item>
        <img
          src="https://www.cavistatech.com/wp-content/uploads/2023/06/cavista-logo-2305.svg"
          alt="company logo"
          className={styles["carouselCavista-logos"]}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://www.xoriant.com/cdn/ff/h8j4-N1kFokMkyOEiHIQVjpbRE5vP8EOCe4cCjK-sP4/1618405020/public/Xoriant-Logo.png"
          alt="company logo"
          className={styles["carouselXoriant-logos"]}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://media.licdn.com/dms/image/C4D0BAQHzb1D5FFOz5Q/company-logo_200_200/0/1630572999730?e=1729728000&v=beta&t=pF_TQSem0VDAc2oXgThBJgZnRWMuElkPiy5lxMJYMGs"
          alt="company logo"
          className={styles["carouselCHealByUS-logos"]}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://www.xoriant.com/cdn/ff/h8j4-N1kFokMkyOEiHIQVjpbRE5vP8EOCe4cCjK-sP4/1618405020/public/Xoriant-Logo.png"
          alt="company logo"
          className={styles["carouselXoriant-logos"]}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://www.cavistatech.com/wp-content/uploads/2023/06/cavista-logo-2305.svg"
          alt="company logo"
          className={styles["carouselCavista-logos"]}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://media.licdn.com/dms/image/C4D0BAQHzb1D5FFOz5Q/company-logo_200_200/0/1630572999730?e=1729728000&v=beta&t=pF_TQSem0VDAc2oXgThBJgZnRWMuElkPiy5lxMJYMGs"
          alt="company logo"
          className={styles["carouselCHealByUS-logos"]}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://www.cavistatech.com/wp-content/uploads/2023/06/cavista-logo-2305.svg"
          alt="company logo"
          className={styles["carouselCavista-logos"]}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://media.licdn.com/dms/image/C4D0BAQHzb1D5FFOz5Q/company-logo_200_200/0/1630572999730?e=1729728000&v=beta&t=pF_TQSem0VDAc2oXgThBJgZnRWMuElkPiy5lxMJYMGs"
          alt="company logo"
          className={styles["carouselCHealByUS-logos"]}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://www.xoriant.com/cdn/ff/h8j4-N1kFokMkyOEiHIQVjpbRE5vP8EOCe4cCjK-sP4/1618405020/public/Xoriant-Logo.png"
          alt="company logo"
          className={styles["carouselXoriant-logos"]}
        />
      </Carousel.Item>
    </Carousel>
  );
};
export default EmployerCarousel;

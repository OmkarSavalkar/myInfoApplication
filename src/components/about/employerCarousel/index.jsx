import React from "react";
import Carousel from "better-react-carousel";
import styles from "../employerCarousel/index.module.scss";

const EmployerCarousel = () => {
  return (
    <Carousel
      cols={2}
      rows={1}
      gap={30}
      loop={true}
      showDots={true}
      autoplay={2800}
      dotColorActive={"yellow"}
      mobileBreakpoint={675}
    >
      <Carousel.Item>
        <img
          src="https://www.xoriant.com/cdn/ff/h8j4-N1kFokMkyOEiHIQVjpbRE5vP8EOCe4cCjK-sP4/1618405020/public/Xoriant-Logo.png"
          alt="company logo"
          className={styles["carousel-logos"]}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://healbyus.com/wp-content/uploads/2022/06/1-e1655303053154-316x139.png"
          alt="company logo"
          className={styles["carousel-logos"]}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://healbyus.com/wp-content/uploads/2022/06/1-e1655303053154-316x139.png"
          alt="company logo"
          className={styles["carousel-logos"]}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://www.xoriant.com/cdn/ff/h8j4-N1kFokMkyOEiHIQVjpbRE5vP8EOCe4cCjK-sP4/1618405020/public/Xoriant-Logo.png"
          alt="company logo"
          className={styles["carousel-logos"]}
        />
      </Carousel.Item>
    </Carousel>
  );
};
export default EmployerCarousel;

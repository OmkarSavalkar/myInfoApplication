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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHtG79d_4y0qpfGQ9paI10oKd_ZCYUfea9_A&usqp=CAU"
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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHtG79d_4y0qpfGQ9paI10oKd_ZCYUfea9_A&usqp=CAU"
          alt="company healby us logo"
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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHtG79d_4y0qpfGQ9paI10oKd_ZCYUfea9_A&usqp=CAU"
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

import React, { useCallback, useState } from "react";
import styles from "./Carousel.module.css";

const colors = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];

const ButtonsContainer = ({ onClick }) => {
  return (
    <div className={styles.btns__container}>
      <button
        className={styles.btns}
        name="prev"
        type="button"
        onClick={onClick}
      >
        {"<"}
      </button>
      <button
        className={styles.btns}
        name="next"
        type="button"
        onClick={onClick}
      >
        {">"}
      </button>
    </div>
  );
};

const CarouselWrapper = ({ children }) => {
  return <div className={styles.carousel}>{children}</div>;
};

const CarouselContainer = ({ currentIndex }) => {
  return (
    <ul
      className={styles.carousel__container}
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {colors.map((color) => (
        <CarouselItem key={color} color={color} />
      ))}
    </ul>
  );
};

const CarouselItem = ({ color }) => {
  return (
    <li className={styles.carousel__item} style={{ backgroundColor: color }} />
  );
};

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeIndexHandler = useCallback(
    (e) => {
      const { name } = e.target;

      if (name === "prev") {
        // prev
        if (currentIndex <= 0) {
          setCurrentIndex(colors.length - 1);
          return;
        }
        setCurrentIndex((prev) => prev - 1);
      } else {
        // next
        if (currentIndex >= colors.length - 1) {
          setCurrentIndex(0);
          return;
        }
        setCurrentIndex((prev) => prev + 1);
      }
    },
    [currentIndex],
  );

  return (
    <main>
      <CarouselWrapper>
        <CarouselContainer currentIndex={currentIndex} />
        <ButtonsContainer onClick={changeIndexHandler} />
      </CarouselWrapper>
    </main>
  );
};

export default Carousel;

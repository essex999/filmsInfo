import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { NextArrow } from "./Arrows/NextArrow";
import { PrevArrow } from "./Arrows/PrevArrow";
import { SliderElement } from "./SliderElement/SliderElement";
import styles from "./SliderHolder.module.scss";
import { useGetMovies } from "../../../query/moviesApi/getSliderTopMovies";

export default function SliderHolder() {
  const { data, refetch } = useGetMovies();
  console.log(data);
  const mockData = [
    "John Doe",
    "Jane Smith",
    "Michael Johnson",
    "Emily Brown",
    "David Williams",
    "Jessica Davis",
    "Daniel Martinez",
    "Sarah Wilson",
    "Christopher Garcia",
    "Lisa Miller",
  ];

  let settings = {
    dots: true,
    infinite: true,

    slidesToShow: 8,
    slidesToScroll: 2,
    autoplay: true,
    speed: 400, //milliseconds
    autoplaySpeed: 5500, //milliseconds
    nextArrow: <NextArrow />, // custom arrows
    prevArrow: <PrevArrow />,
  };
  return (
    <div className={styles.sliderWrapper}>
      <div className={`${"slider-container"} ${styles.sliderContainer}`}>
        <Slider {...settings} className={styles.slider}>
          {mockData.map((el, index) => (
            <div key={index}>
              <div className={styles.sliderElement}>
                <div className={styles.sliderContent}>
                  <SliderElement />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <button
        onClick={() => {
          refetch();
        }}
      />
    </div>
  );
}

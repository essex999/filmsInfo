import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useGetMovies } from "../../../query/moviesApi/getSliderTopMovies";
import { NextArrow } from "./Arrows/NextArrow";
import { PrevArrow } from "./Arrows/PrevArrow";
import { SliderElement } from "./SliderElement/SliderElement";
import styles from "./SliderHolder.module.scss";

export default function SliderHolder() {
  const { data, refetch } = useGetMovies();

  let settings = {
    dots: false,
    infinite: true,
    draggable: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 400, //milliseconds
    autoplaySpeed: 5500, //milliseconds
    nextArrow: <NextArrow />, // custom arrows
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <button
        style={{ position: "absolute", top: "0", left: "0", color: "red" }}
        onClick={refetch}
      >
        +
      </button>
      <div className={styles.sliderWrapper}>
        <div className={`${"slider-container"} ${styles.sliderContainer}`}>
          <Slider {...settings} className={styles.slider}>
            {(data ? data.docs : []).map((el, index) => {
              if (el.poster && el.poster.previewUrl) {
                return (
                  <SliderElement
                    key={index} //number
                    name={el.name} //string
                    alternativeName={el.alternativeName} //string
                    year={el.year} //number
                    countries={el.countries} //array
                    genres={el.genres} //array
                    poster={el.poster} //object   previewUrl   url
                  />
                );
              }
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}

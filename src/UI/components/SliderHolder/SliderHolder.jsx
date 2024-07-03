import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import { NextArrow } from './Arrows/NextArrow'
import { PrevArrow } from './Arrows/PrevArrow'
import styles from './SliderHolder.module.scss'
export default function SliderHolder() {

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
    "Lisa Miller"
];





  let settings = {
    dots: true,
    infinite: true,
   
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay:true,
    speed:400,//milliseconds
    autoplaySpeed:3000, //milliseconds
    nextArrow:<NextArrow/>,  // custom arrows
    prevArrow:<PrevArrow/>
    
  };
  return ( 
    
   <div className={styles.sliderWrapper}> 
    <div className={`${"slider-container"} ${styles.sliderContainer}`}>
    <Slider {...settings} className={styles.slider}>
      {mockData.map((el,index)=>
        (<div  key={index}>
          <div className={styles.sliderElement}>
          <div className={styles.sliderImg}>
            
            </div>
          </div>
          </div>)
      )}

    </Slider>
    </div>
    </div>
  );
}
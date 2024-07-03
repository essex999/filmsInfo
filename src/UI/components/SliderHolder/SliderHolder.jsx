import React from "react";
import styles from "./SliderHolder.module.scss";
export const SliderHolder = () => {
  const data = [
    {
      img: "https://cdn.pixabay.com/photo/2018/03/29/07/42/europe-3271588_1280.jpg",
      name: "Нечто. Новый вид",
      info: "2024, США, Боевики",
    },
    {
      img: "https://cdn.pixabay.com/photo/2018/03/29/07/42/europe-3271588_1280.jpg",
      name: "Нечто. Новый вид",
      info: "2024, США, Боевики",
    },
    {
      img: "https://cdn.pixabay.com/photo/2018/03/29/07/42/europe-3271588_1280.jpg",
      name: "Нечто. Новый вид",
      info: "2024, США, Боевики",
    },
    {
      img: "https://cdn.pixabay.com/photo/2018/03/29/07/42/europe-3271588_1280.jpg",
      name: "Нечто. Новый вид",
      info: "2024, США, Боевики",
    },
    {
      img: "https://cdn.pixabay.com/photo/2018/03/29/07/42/europe-3271588_1280.jpg",
      name: "Нечто. Новый вид",
      info: "2024, США, Боевики",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.slider_wrapper}>
        <div className={styles.card_item}>
          <img src="" alt="" />
          <p></p>
          <p></p>
        </div>
        <div className={styles.card_item}>
          <img src="" alt="" />
          <p></p>
          <p></p>
        </div>
        <div className={styles.card_item}>
          <img src="" alt="" />
          <p></p>
          <p></p>
        </div>
        <div className={styles.card_item}>
          <img src="" alt="" />
          <p></p>
          <p></p>
        </div>
        <div className={styles.card_item}>
          <img src="" alt="" />
          <p></p>
          <p></p>
        </div>
        <div className={styles.card_item}>
          <img src="" alt="" />
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

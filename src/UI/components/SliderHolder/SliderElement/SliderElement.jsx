import styles from "./SliderElement.module.scss";

export const SliderElement = ({
  name,
  alternativeName,
  year,
  countries,
  genres,
  poster,
}) => {
  return (
    <>
      <div className={styles.sliderElement}>
        <div className={styles.sliderContent}>
          <div className={styles.imgElement}>
            <img
              className={styles.img}
              src={poster && poster.previewUrl ? poster.previewUrl : "x"}
              alt="adfsasfdsf"
            />
          </div>

          <h4 className={styles.h}>{name ? name : alternativeName}</h4>
          <p className={styles.text}>2024, США, Фэнтези</p>
        </div>
      </div>
    </>
  );
};

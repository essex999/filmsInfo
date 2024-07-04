import styles from "./SliderElement.module.scss";

export const SliderElement = ({
  name,
  alternativeName,
  year,
  countries,
  genres,
  poster,
}) => {
  const getDataFromArray = (data) => {
    return (data === "countries" ? countries : genres)
      .map((el, index) => {
        if (index < 3) {
          return el.name;
        }
      })
      .filter((el) => el !== undefined);
  };

  return (
    <>
      <div className={styles.sliderElement}>
        <div className={styles.sliderContent}>
          <div className={styles.imgElement}>
            <img
              className={styles.img}
              src={poster.previewUrl}
              alt="adfsasfdsf"
            />
          </div>

          {/* <h4 className={styles.h}>{name ? name : alternativeName}</h4>
					<p className={styles.text}>
						{`${year}, ${getDataFromArray('countries')}, ${getDataFromArray()}`}
					</p> */}
        </div>
      </div>
    </>
  );
};

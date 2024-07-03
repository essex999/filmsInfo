import { useState } from "react"
 
import ListArrowIcon from "../../../assets/IconComponents/listArrow.js"
import { genres } from "../../../consts"
import { useGetMovies } from '../../../query/moviesApi/useGetMovies.js'
import styles from "./BarContentPopUp.module.scss"
export const BarContentPopUp = ({ show, showToggle, content, typeNumber }) => {
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("За все время");
  const [isShowList, setIshowList] = useState(false);

  const { data, mutate, isError  } = useGetMovies();

  const getMovieHandleCLick = () => {
    mutate({ typeNumber, genre, year, page: 1 });
  };

  const years = [];
  for (let year = 2024; year > 1906; year--) {
    years.push(year);
  }
  years.unshift("За все время");
  return (
    <div
      className={`${styles.NavSubMenuGroup}  ${
        show ? styles.visible : styles.hidden
      } ${styles.scale_up_ver_top}`}
      onMouseLeave={() => {
        showToggle(false);
      }}
    >
      <div className={styles.NavSubMenuGroupGenres}>
        {genres.map((element, index) => (
          <div
            className={styles.NavSubMenuGroupButton}
            onClick={() => {
              setGenre(element);
            }}
            key={index}
          >
            {element}
          </div>
        ))}
      </div>
      <div className={styles.NavSubMenuGroupFilter}>
        <div className={styles.FilterText}>Выберите жанр и год</div>
        <div
          className={styles.ButtonGroup}
          onMouseLeave={() => {
            setIshowList(false);
          }}
        >
          <div
            className={styles.NavSubMenuGroupButtonList}
            style={{ display: isShowList ? "block" : "none" }}
          >
            {years.map((element, index) => (
              <div
                className={styles.YearElement}
                key={index}
                onClick={() => {
                  setYear(element);
                  setIshowList(false);
                }}
              >
                {element}
              </div>
            ))}
          </div>
          <div
            className={styles.NavSubMenuGroupFilterSelectButton}
            onClick={() => {
              setIshowList(!isShowList);
            }}
          >
            {year} <ListArrowIcon />
          </div>
        </div>
        <div
          className={styles.NavSearchButton}
          onClick={() => {
            getMovieHandleCLick();
            console.log("click");
          }}
        >
          Поехали!
        </div>
      </div>
    </div>
  );
};
import { useEffect } from "react";
import { useMainPageData } from "../../../query/moviesApi/getMainPageData";
import { Header } from "../../components/Header/Header";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import SliderHolder from "../../components/SliderHolder/SliderHolder";
import styles from "./home.module.scss";
import { MovieCard } from "../../components/MovieCard/MovieCard";

export const Home = () => {
  const { data, refetch, isSuccess } = useMainPageData();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className={styles.wrapper}>
      <Header />
      <SearchBar />
      <SliderHolder></SliderHolder>
      <button onClick={refetch}>Siuda</button>
      <div className={styles.dataContainer}>
        {(data ? data.docs : []).map((el, index) => (
          <MovieCard
            key={index}
            poster={el.poster}
            genres={el.genres}
            name={el.name}
            alternativeName={el.alternativeName}
            year={el.year}
            countries={el.countries}
          />
        ))}
      </div>
    </div>
  );
};

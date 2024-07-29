import { Pagination } from "@mui/material";

import { useNavigate, useParams } from "react-router-dom";

import { Header } from "../../components/Header/Header";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import styles from "./categoryScreen.module.scss";
import { useGetMovies } from "../../../query/moviesApi/useGetMovies";
import { useEffect, useState } from "react";
export const CategoryScreen = () => {
  const navigate = useNavigate();
  const { pageNumber } = useParams();

  const [typeNumber, setTypeNumber] = useState(1);

  const [year, setYear] = useState(2001);

  const [genre, setGenre] = useState("боевик");

  const [currentPage, setCurrentPage] = useState(1);

  const { data, refetch } = useGetMovies({
    typeNumber: typeNumber,
    "genres.name": genre.toLowerCase(),
    year: year,
    page: currentPage,
  });
  useEffect(() => {
    console.log(data);
  }, [data]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      <SearchBar />
      <button
        onClick={() => {
          refetch();
        }}
      >
        Click
      </button>
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
      {data && (
        <Pagination
          className={styles.paginationWrapper}
          count={data.pages}
          page={currentPage}
          onChange={(e, value) => {
            setCurrentPage(value);
            navigate(`/category/${value}`);
            scrollToTop();
          }}
        />
      )}
    </div>
  );
};

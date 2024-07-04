import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_KEY } from "../../consts";

const BASE_URL = "https://api.kinopoisk.dev/";

export const useGetMovies = () => {
  const { data, isError, isSuccess, refetch } = useQuery({
    queryKey: ["topMoviesData"],
    enabled: false,
    queryFn: async () => {
      const response = await axios.get(`${BASE_URL}v1.4/movie`, {
        params: {
          year: "2024",
          type: "movie",
          limit: 34,
          "rating.imdb": "8.2 - 10",
          movieLength: "70 - 200",
        },
        headers: { "X-API-KEY": API_KEY },
      });
      return response.data;
    },
  });

  return {
    data,
    isError,
    refetch,
    isSuccess,
  };
};

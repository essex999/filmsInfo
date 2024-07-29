import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_KEY } from "../../consts";

const BASE_URL = "https://api.kinopoisk.dev/";

export const useGetMovies = (params) => {
  const { data, refetch, isError, isFetched } = useQuery({
    queryKey: ["moviesData"],
    enabled: false,
    queryFn: async () => {
      console.log(params);
      const response = await axios.get(`${BASE_URL}v1.4/movie`, {
        params: { ...params, limit: 16 },
        headers: { "X-API-KEY": API_KEY },
      });
      return response.data;
    },
  });

  return {
    data,
    refetch,
    isError,
    isFetched,
  };
};

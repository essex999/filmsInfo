import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { API_KEY } from '../../consts'

const BASE_URL = 'https://api.kinopoisk.dev/'

export const useSearchMovies = queryParams => {
	const { data, isError, refetch, isLoading, isFetching } = useQuery({
		queryKey: ['searchedMoviesData', queryParams],
		enabled: false,
		retry: 0,
		queryFn: async queryParams => {
			const response = await axios.get(`${BASE_URL}v1.4/movie/search`, {
				params: {
					...queryParams.queryKey[1],
				},
				headers: { 'X-API-KEY': API_KEY },
			})
			return response
		},
	})

	return {
		data,
		isError,
		refetch,
		isLoading,
		isFetching,
	}
}

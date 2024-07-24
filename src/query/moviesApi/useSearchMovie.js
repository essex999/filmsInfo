import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { API_KEY } from '../../consts'

const BASE_URL = 'https://api.kinopoisk.dev/'

export const useSearchMovies = params => {
	const queryClient = useQueryClient()
	const { data, isError, refetch, isLoading, isFetching } = useQuery({
		queryKey: ['searchedMoviesData', params],
		enabled: false,
		retry: 0,
		queryFn: async () => {
			const response = await axios.get(`${BASE_URL}v1.4/movie/search`, {
				params: { ...params },
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

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { API_KEY } from '../../consts'

const BASE_URL = 'https://api.kinopoisk.dev/'

export const useMainPageData = page => {
	const { data, isError, isSuccess, refetch } = useQuery({
		queryKey: ['mainPageData', page],
		enabled: false,
		queryFn: async () => {
			const response = await axios.get(`${BASE_URL}v1.4/movie`, {
				params: { page: page, lists: 'top250', limit: 16 },
				headers: { 'X-API-KEY': API_KEY },
			})
			return response.data
		},
	})

	return {
		data,
		isError,
		refetch,
		isSuccess,
	}
}

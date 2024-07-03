import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { API_KEY } from '../../consts'
 
const BASE_URL = 'https://api.kinopoisk.dev/'

export const useGetMovies = () => {
	const { data, isError, mutate, isSuccess } = useMutation({
		queryKey: ['moviesData'],
		mutationFn: async ({ typeNumber, genre, year, page }) => {
			console.log(typeNumber)
			const response = await axios.get(`${BASE_URL}v1.4/movie`, {
				params: {
					typeNumber: typeNumber,
					'genres.name': genre.toLowerCase(),
					year: year,
					page: page,
				},
				headers: { 'X-API-KEY': API_KEY },
			})
			return response
		},
		onSuccess: data => {
			console.log(data)
		},
		isError: err => {
			console.log(err)
		},
	})

	return {
		data,
		isError,
		mutate,
		isSuccess,
	}
}

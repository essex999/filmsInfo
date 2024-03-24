import axios from 'axios'
import { API_KEY } from '../consts'
const BASE_URL = 'https://api.kinopoisk.dev/'
const getMovieByParams = async props => {
	console.log(props.year)
	try {
		const response = await axios.get(`${BASE_URL}v1.4/movie`, {
			params: {
				'genres.name': props.genre.toLowerCase(),
				year: props.year,
				type: 'movie',
			},
			headers: { 'X-API-KEY': API_KEY },
		})
		return response
	} catch (error) {
		throw error
	}
}

export { getMovieByParams }

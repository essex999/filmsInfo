import axios from 'axios'
import { API_KEY } from '../consts'
const BASE_URL = 'https://api.kinopoisk.dev/'
const getMovie = async () => {
	try {
		const response = await axios.get(`${BASE_URL}v1.4/movie`, {
			params: { year: '2020', 'genres.name': 'криминал', 'rating.imdb': '1-5' },
			headers: { 'X-API-KEY': API_KEY },
		})
		return response
	} catch (error) {
		throw error
	}
}

export { getMovie }
// https://api.kinopoisk.dev/v1.4/movie?year=2023&genres.name=криминал

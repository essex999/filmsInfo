import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	genre: '',
	year: '',
}

export const searchMovieParams = createSlice({
	name: 'searchMovieParams',
	initialState,
	reducers: {
		setGenreParam: (state, action) => {
			return { ...state, genre: action.payload }
		},
		setYearParam: (state, action) => {
			return { ...state, year: action.payload }
		},
	},
})

export const { setGenreParam, setYearParam } = searchMovieParams.actions

export default searchMovieParams.reducer

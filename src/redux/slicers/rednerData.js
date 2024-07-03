import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	movieData: {},
	page: 1,
}

export const searchedMoviesData = createSlice({
	name: 'searchMovieParams',
	initialState,
	reducers: {
		setPage: (state, action) => {
			return { ...state, page: action.payload }
		},
		setData: (state, action) => {
			return { ...state, movieData: action.payload }
		},
	},
})

export const { setData, setPage } = searchedMoviesData.actions

export default searchedMoviesData.reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	searchTextContent: '',
}

export const searchMovieParams = createSlice({
	name: 'searchParams',
	initialState,
	reducers: {
		setSearchTextContent: (state, action) => {
			state.searchTextContent = action.payload
		},
	},
})

export const { setSearchTextContent } = searchMovieParams.actions

export default searchMovieParams.reducer

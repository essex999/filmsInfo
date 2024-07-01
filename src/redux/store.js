import { configureStore } from '@reduxjs/toolkit'
import searchedMoviesData from './slicers/rednerData.js'
export const store = configureStore({
	reducer: { searchMovieParams: searchedMoviesData },
})

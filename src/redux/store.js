import { configureStore } from '@reduxjs/toolkit'
import searchMovieParamsSlicer from './slicers/searchMovieParamsSlicer'
export const store = configureStore({
	reducer: { searchParams: searchMovieParamsSlicer },
})

import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './slicers/dataReducer'
export const store = configureStore({
	reducer: { data: dataReducer },
})

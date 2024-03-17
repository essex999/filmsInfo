import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	images: [],
	name: '',
	description: '',
	avatar: '',
}

export const dataReducer = createSlice({
	name: 'image',
	initialState,
	reducers: {
		setAvatar: (state, action) => {
			return { ...state, avatar: action.payload }
		},
	},
})

export const { setAvatar } = dataReducer.actions

export default dataReducer.reducer

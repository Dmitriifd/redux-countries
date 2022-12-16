import { SET_SEARCH } from './controls-actions'

const initialState = {
	search: '',
	region: '',
}

export const controlsReducer = (state = initialState, action) => {
	const { type, payload } = action
	
	switch (type) {
		case SET_SEARCH:
			return {
				...state,
				search: payload,
			}
		default:
			return state
	}
}

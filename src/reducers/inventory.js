let newState

const INITIAL_STATE = {
	all: [],
	offset: 0,
	limit: 20,
	count: 0
}

export const inventory = (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case 'SEARCH_INVENTORY':
		newState = Object.assign({}, {
			count: action.payload.length,
			all: action.payload
		})
		return newState
	case 'SELECT_INVENTORY':
		newState = Object.assign({}, {
			count: action.payload.length,
			all: action.payload
		})
		return newState
	default:
		return state
	}
}

export default inventory

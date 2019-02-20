// import { hashHistory } from 'react-router'
// import axios from 'axios'
import {
	SEARCH_INVENTORY,
	SELECT_INVENTORY
} from './types'

export const getInventoryItem = (inventoryId) => (
	{
		type: SELECT_INVENTORY,
		id: inventoryId
	})

export const searchInventory = payload => {
	return { type: SEARCH_INVENTORY, payload }
}

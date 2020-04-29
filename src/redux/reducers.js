/* eslint-disable indent */
import { combineReducers } from 'redux'

const products = (state = [], { type, payload }) => {
  switch (type) {
    case 'UPDATE_PRODUCTS':
      return payload

    default:
      return state
  }
}

export default combineReducers({
  products
})

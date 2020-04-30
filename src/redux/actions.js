/* eslint-disable import/prefer-default-export */

export const updateProduct = payload => {
  return {
    type: 'UPDATE_PRODUCTS',
    payload
  }
}

export const updateCategories = payload => {
  return {
    type: 'UPDATE_CATEGORIES',
    payload
  }
}

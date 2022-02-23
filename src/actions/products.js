export function filterProductsStart(searchText) {
  return {
    type: 'FILTER_PRODUCTS_START',
    payload: searchText,
  };
}

export function fetchProductsStart() {
  return {
    type: 'FETCH_PRODUCTS_START',
  };
}

export function fetchProductsSuccess(products) {
  return {
    type: 'FETCH_PRODUCTS_SUCCESS',
    payload: products,
  };
}

export function fetchProductsError(error) {
  return {
    type: 'FETCH_PRODUCTS_ERROR',
    payload: error,
  };
}

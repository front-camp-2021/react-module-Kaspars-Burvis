import {
  GET_PRODUCTS,
  PRODUCTS_LOAD,
  SET_SEARCH_PRODUCTS,
  SET_TOTAL_CARDS,
  SET_CURRENT_PAGE,
  SET_WISH_LIST,
} from './actionsType';

const initialState = {
  products: [],
  productsLoading: false,
  cardsPerPage: 9,
  currentPage: 1,
  totalCards: 0,
  searchProducts: '',
  wishList: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        productsLoading: false,
        totalCards: action.payload.length,
      };
    case PRODUCTS_LOAD:
      return {
        ...state,
        productsLoading: action.payload,
      };
    case SET_SEARCH_PRODUCTS:
      return {
        ...state,
        searchProducts: action.payload,
      };
    case SET_TOTAL_CARDS:
      return {
        ...state,
        totalCards: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_WISH_LIST:
      return {
        ...state,
        wishList: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;

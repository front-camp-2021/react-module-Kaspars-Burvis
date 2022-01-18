import axios from 'axios';

import {
  GET_PRODUCTS,
  PRODUCTS_LOAD,
  SET_TOTAL_CARDS,
  SET_CURRENT_PAGE,
  SET_SEARCH_PRODUCTS,
  SET_WISH_LIST,
  SET_CATEGORIES,
  SET_BRANDS,
} from './actionsType';

export const getProducts = () => {
  return async (dispatch) => {
    dispatch(productsLoad(true));
    const resp = await axios.get('http://localhost:3001/products');
    dispatch(setProducts(resp.data));
    dispatch(productsLoad(false));
  };
};

export const setProducts = (products) => ({
  type: GET_PRODUCTS,
  payload: products,
});

export const productsLoad = (bool) => ({
  type: PRODUCTS_LOAD,
  payload: bool,
});

export const setSearchProduct = (searchProducts) => ({
  type: SET_SEARCH_PRODUCTS,
  payload: searchProducts,
});

export const setWishList = (wishList) => ({
  type: SET_WISH_LIST,
  payload: wishList,
});

export const setTotalCards = (number) => ({
  type: SET_TOTAL_CARDS,
  payload: number,
});

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const getCategories = () => {
  return async (dispatch) => {
    const { data } = await axios.get('http://localhost:3001/categories');
    const categories = data.map((item) => ({ categories: item, checked: false }));
    dispatch(setCategories(categories));
  };
};

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});


export const getBrands = () => {
  return async (dispatch) => {
    const { data } = await axios.get('http://localhost:3001/brands');
    const brands = data.map((item) => ({ brand: item, checked: false }));
    dispatch(setBrands(brands));
  };
};

export const setBrands = (brands) => ({
  type: SET_BRANDS,
  payload: brands,
});

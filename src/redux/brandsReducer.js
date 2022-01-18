import { SET_BRANDS } from './actionsType';

const initialState = {
  brands: [],
};

const brandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BRANDS:
      return {
        ...state,
        brands: action.payload,
      };
    default:
      return state;
  }
};

export default brandsReducer;

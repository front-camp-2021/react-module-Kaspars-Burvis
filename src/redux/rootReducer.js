import { combineReducers } from 'redux';

import productsReducer from './productsReducer';
import categoryReducer from './categoryReducer';
import brandsReducer from './brandsReducer';

const rootReducer = combineReducers({
  productsReducer,
  categoryReducer,
  brandsReducer,
});

export default rootReducer;

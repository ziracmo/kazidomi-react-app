import { combineReducers } from 'redux';

import authReducer from './authReducer';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
  productsReducer,
  authReducer,
});

export default rootReducer;

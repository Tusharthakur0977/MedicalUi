import {combineReducers} from 'redux';
import cartReducer from './slices/CartSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;

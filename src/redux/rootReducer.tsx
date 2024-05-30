import { combineReducers } from 'redux';
import bookmarkReducer from './slices/BookmarkSlice';

const rootReducer = combineReducers({
  bookmark: bookmarkReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  // for each key assign one reducer, each reducer returns one piece of app state
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;

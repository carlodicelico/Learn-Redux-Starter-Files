import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import posts from './postReducer';
import comments from './commentReducer';


const appReducer = combineReducers({
  posts,
  comments,
  routing: routerReducer
});

export default appReducer;

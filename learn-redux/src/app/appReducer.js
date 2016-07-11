import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import posts from '../photos/postReducer';
import comments from '../comments/commentReducer';


const appReducer = combineReducers({
  posts,
  comments,
  routing: routerReducer,
  form: formReducer
});

export default appReducer;

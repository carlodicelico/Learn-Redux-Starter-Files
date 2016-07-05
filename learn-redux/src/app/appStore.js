import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import appReducer from './appReducer';

import comments from '../comment/commentData';
import posts from '../post/postData';

const defaultState = {
  posts,
  comments
};

const appStore = createStore(appReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, appStore);

export default appStore;

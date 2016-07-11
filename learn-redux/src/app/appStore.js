import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import appReducer from './appReducer';

import comments from '../comments/commentData';
import posts from '../photos/postData';

const defaultState = {
  posts,
  comments
};

const appStore = createStore(appReducer, defaultState, window.devToolsExtension && window.devToolsExtension());
//const appStore = createStore(appReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, appStore);

export default appStore;

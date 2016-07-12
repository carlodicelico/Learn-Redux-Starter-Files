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

// for Redux DevTools
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const appStore = createStore(appReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, appStore);

export default appStore;

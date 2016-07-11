import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import Dispatcher from './appDispatcher';
import Single from '../single/Single';
import PhotoGrid from '../photogrid/PhotoGrid';
import appStore, { history } from './appStore';


const Routes = (
  <Provider store={appStore}>
    <Router history={history}>
      <Route path="/" component={Dispatcher}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

export default Routes;

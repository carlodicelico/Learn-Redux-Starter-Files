import React from 'react';
import Raven from 'raven-js';
import { render } from 'react-dom';
import { sentryUrl, logException } from './app/appConfig';

import css from './app/styles/style.styl';
import Routes from './app/Routes';

// set up Raven for logging errors to Sentry
Raven.config(sentryUrl, {
  // custom properties
  tags: {
    git_commit: 'foo',
    userLevel: 'editor'
  }
}).install();

// custom logger
/*logException(new Error('download failed!'), {
  email: 'foo@bar.com'
});*/

// captureMessage
Raven.captureMessage('something bad');

// show user a report dialog when something bad happens
//Raven.showReportDialog();

const mountNode = document.querySelector('#app');

render(Routes, mountNode);

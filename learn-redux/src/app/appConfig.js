import Raven from 'raven-js';

const sentryKey = '171e1bd5fa6b487abe2ffa5ee49e1f5b';
const sentryApp = '86748';
export const sentryUrl = `https://${sentryKey}@app.getsentry.com/${sentryApp}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}

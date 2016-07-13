import React from 'react';
import test from 'ava';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import App from '../App';
import appStore from '../appStore';


test.beforeEach(t => {
  console.log('calling beforeEach callback');

  t.context.wrapper = shallow(
    <Provider store={appStore}>
      <App />
    </Provider>
  );
});

test('renders correctly', t => {
  t.true(t.context.wrapper.contains(<h1>AppStar</h1>));
});

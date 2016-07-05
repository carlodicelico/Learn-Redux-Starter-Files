import React from 'react';
import { render } from 'react-dom';

import css from './app/styles/style.styl';
import Routes from './app/Routes';


const mountNode = document.querySelector('#app');

render(Routes, mountNode);

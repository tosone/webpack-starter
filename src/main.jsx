import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import FastClick from 'fastclick';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router } from 'react-router-dom';

import s from './main.css';

ReactDOM.render(<h1 className={s.color}>Hello, world!</h1>, document.getElementById('container'));

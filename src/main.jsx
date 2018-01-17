import _ from 'lodash';
import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import 'whatwg-fetch';
import 'babel-polyfill';

import $ from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';

import './style.scss';

import Routers from './routers';
import history from './history';
import reducers from './reducers';

import Home from './view/home';

const store = createStore(reducers, applyMiddleware(thunk));

FastClick.attach(document.body);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routers />
    </Router>
  </Provider>,
  document.getElementById('container')
);

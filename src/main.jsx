import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import FastClick from 'fastclick';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router } from 'react-router-dom';

import $ from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';

import './style.scss';

import m from './readme.md';

console.log(m);

ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById('container'));

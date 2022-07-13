import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';

import { App } from './App.jsx';
import { Provider } from 'react-redux';
import { reducers } from './reducers/index';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(reducers, composedEnhancer);


ReactDOM.render(
  <Provider store = { store }>
  <App />
  </Provider>,
  document.getElementById('root')
)
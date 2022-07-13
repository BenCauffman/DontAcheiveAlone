import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App.jsx';

import styles from './styles.scss'



ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
 document.getElementById('root'));
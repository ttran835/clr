import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './styles/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Apps from './Container/Apps/Apps';

const history = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter history={history}>
    <Apps />
  </BrowserRouter>,
  document.getElementById('app'),
);

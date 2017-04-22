import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import store from './store/configureStore';
ReactDOM.render(
  <Provider store={store}>
	  <Router routes={routes} history={browserHistory}/>
  </Provider>,
  document.getElementById('root')
);

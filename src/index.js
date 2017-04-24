import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './css/index.css';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import store from './store/configureStore';

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
  	<MuiThemeProvider>
	  <Router routes={routes} history={browserHistory}/>
	</MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

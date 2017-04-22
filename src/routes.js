import React from 'react';
import { Route } from 'react-router';
import App from './container/App';
import FilterTable from './components/FilteredTable';
import Todo from './container/Todo';

module.exports = (
	<Route>
		<Route path="/" component={App} />
		<Route path="/filtertable" component={FilterTable} />
		<Route path="/todo" component={Todo} />
	</Route>
)
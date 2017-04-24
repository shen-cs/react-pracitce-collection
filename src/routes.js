import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './container/App';
import FilterTable from './components/FilteredTable';
import Todo from './container/Todo';
import GithubFinder from './container/GithubFinder';
import GithubHome from './components/GithubHome';
import GithubResult from './components/GithubResult';
module.exports = (
	<Route>
		<Route path="/" component={App}/>
		<Route path="/filtertable" component={FilterTable} />
		<Route path="/todo" component={Todo} />
		<Route path="/github-finder" component={GithubFinder}>
			<IndexRoute component={GithubHome}/>
			<Route path="/github-finder/result" component={GithubResult}/>
		</Route>
	</Route>
)
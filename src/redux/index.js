import todo from './todoRedux';
import githubData from './githubDataRedux';
import githubUi from './githubUiRedux';
import { combineReducers } from 'redux';
export const githubReducer = combineReducers({
	todo,
	githubData,
	githubUi,
});

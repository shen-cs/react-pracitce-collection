import { githubUiActionCreator } from './githubUiRedux';

const githubDataTypes = {
	GET_GITHUB_INITIATE: 'GET_GITHUB_INITIATE',
	GET_GITHUB_SUCCESS: 'GET_GITHUB_SUCCESS',
	GET_GITHUB_FAIL: 'GET_GITHUB_FAIL',
	CHANGE_USER_ID: 'CHANGE_USER_ID',
}

const FETCH_URL = 'https://api.github.com/users/';
// action creator
export const githubDataActionCreator = {
	getGithub: (userId) => {
		return (dispatch) => {
			dispatch({type: githubDataTypes.GET_GITHUB_INITIATE});
			dispatch(githubUiActionCreator.showSpinner());
			fetch(FETCH_URL + userId)
				.then((res) => res.json())
				.then((json) => {
					dispatch({type: githubDataTypes.GET_GITHUB_SUCCESS, payload: json});
					dispatch(githubUiActionCreator.hideSpinner());
				})
				.catch((res) => { dispatch({type: githubDataTypes.GET_GITHUB_FAIL })});
		}
	},
	changeUserId: (text) => {
		return {type: githubDataTypes.CHANGE_USER_ID, payload: text}
	},
}

const initialState = {userId: '', data: {}};

const githubDataReducer = (state = initialState, action) => {
	const {type, payload} = action;
	switch(type) {
		case githubDataTypes.GET_GITHUB_SUCCESS: {
			return {...state, data: payload};
		}

		case githubDataTypes.CHANGE_USER_ID: {
			return {...state, userId: payload}
		}

		default: return state;
	}
};
export default githubDataReducer;
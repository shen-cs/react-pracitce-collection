const githubUiTypes = {
	SHOW_SPINNER: 'SHOW_SPINNER',
	HIDE_SPINNER: 'HIDE_SPINNER',
}

export const githubUiActionCreator = {
	showSpinner: () => ({type: githubUiTypes.SHOW_SPINNER}),
	hideSpinner: () => ({type: githubUiTypes.HIDE_SPINNER}),
}

const initialState = {spinnerVisible: false};

const githubUiReducer = (state=initialState, action) => {
	const {type} = action;
	switch(type) {
		case githubUiTypes.SHOW_SPINNER: {
			return {...state, spinnerVisible: true};
		}
		case githubUiTypes.HIDE_SPINNER: {
			return {...state, spinnerVisible: false};
		}
		default: return state;
	}
};
export default githubUiReducer;
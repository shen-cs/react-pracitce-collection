const types = {
	ADD_TODO: 'ADD_TODO',
	DELETE_TODO: 'DELETE_TODO',
	CHANGE_TEXT: 'CHANGE_TEXT',
}

export const actionCreators = {
	addTodo: () => {
	  return {type: types.ADD_TODO}
	},
	deleteTodo: (index) => {
		return {type: types.DELETE_TODO, payload: index}
	},
	changeText: (text) => {
		return {type: types.CHANGE_TEXT, payload: {text: text, time: new Date().toLocaleString()}}
	},
}

const initialState = {
	todos: [{text:'Learn React', time: new Date().toLocaleString()},], 
	todo: {text:'', time:''},
}
const todoReducer = (state=initialState, action) => {
	const {todos, todo} = state;
	const {type, payload} = action;
	switch(type) {
		case types.ADD_TODO: {
			if(todo === "") return state;
			return {...state, todos: [todo, ...todos]};
		}
		case types.DELETE_TODO: {
			return {...state, todos: todos.filter((item, index) => index !== payload)}
		}
		case types.CHANGE_TEXT: {
			return {...state, todo: payload};
		}
		default: return state
	}
}

export default todoReducer;
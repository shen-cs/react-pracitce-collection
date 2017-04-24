import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../redux/todoRedux';
import '../css/section.css';
const mapStateToProps = (state) => ({
	todos: state.todo.todos,
});
const mapDispatchToProps = (dispatch) => ({
	onDeleteTodo: (index) => {
		dispatch(actionCreators.deleteTodo(index))
	},
});
class TodoList extends Component {
	renderItem = (todo, index) => {
		const {onDeleteTodo} = this.props;
		return (
		<li key={index}>
			{todo.text}<br/>{todo.time}
			<button onClick={() => onDeleteTodo(index)}>&times;</button>
		</li>
		)

	}
	render() {
		const {todos} = this.props;
		return(
			<div className="container">
				{todos.map(this.renderItem)}
			</div>
		)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
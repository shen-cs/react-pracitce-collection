import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../redux/todoRedux';
const mapStateToProps = (state) => ({
	todo: state.todo.todo.text,
});
const mapDispatchToProps = (dispatch, props) => ({
	onChangeText: (e) => {
		dispatch(actionCreators.changeText(e.target.value))
	},
	onAddTodo: () => {
		dispatch(actionCreators.addTodo());
		dispatch(actionCreators.changeText(''));
	}
})
class TodoHeader extends Component {
	render() {
		const {onChangeText, onAddTodo, todo} = this.props;
		return (
			<div>
				<h2>To-do List</h2>
				<input type="text" value={todo} onChange={onChangeText}/>
				<button onClick={onAddTodo}>Submit</button>
			</div>
		)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoHeader) 
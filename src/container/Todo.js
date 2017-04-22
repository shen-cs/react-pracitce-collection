import React, { Component } from 'react';
import TodoHeader from '../components/TodoHeader';
import TodoList from '../components/TodoList';
import '../css/section.css';
class Todo extends Component {
  render() {
    return (
      <div className="container">
        <TodoHeader />
        <TodoList />
      </div>
    );
  }
}

export default Todo;

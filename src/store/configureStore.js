import { createStore } from 'redux';
import { todoReducer } from '../redux/todoRedux';

export default createStore(todoReducer);
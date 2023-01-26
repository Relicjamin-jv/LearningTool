import React from 'react';
import TodoListItem from "./TodoListItem";
import './TodoList.css';
import NewTodoForm from './NewTodoForm';
import {connect} from 'react-redux';
import { removeTodo, markCompleted } from './actions';

const TodoList = ({todos = [], onRemovePressed, onMarkCompleted}) => (
    <div className="list-wrapper">
        <NewTodoForm/>
        {todos.map((todo) => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} onMarkCompleted={onMarkCompleted}/>)}
    </div>
);

const mapStateToProps = (state) => ({
    todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onMarkCompleted: text => dispatch(markCompleted(text)),
})

// (state, actions)(TodoList)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
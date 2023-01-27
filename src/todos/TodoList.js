import React, {useEffect} from 'react';
import TodoListItem from "./TodoListItem";
import './TodoList.css';
import NewTodoForm from './NewTodoForm';
import {connect} from 'react-redux';
import { displayAlert, loadTodos, removeTodoRequest, markCompleteRequest } from './thunks';
import {markCompleted } from './actions';
import { isLoading } from './reducers';
import { getTodos, getTodosLoading, getIncompleteTodos, getCompleteTodos } from './selectors';

const TodoList = ({completedTodos, incompletedTodos, onRemovePressed, onMarkCompleted, isLoading, startLoadingTodos}) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);
    const loadingMessage = <div>loading todos...</div>
    const content = (
        <div className="list-wrapper">
            <NewTodoForm/>
            <h3>Incomplete:</h3>
            {incompletedTodos.map((todo) => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} onMarkCompleted={onMarkCompleted}/>)}
            <h3>Completed:</h3>
            {completedTodos.map((todo) => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} onMarkCompleted={onMarkCompleted}/>)}
        </div>
    );

    return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
    completedTodos: getCompleteTodos(state),
    incompletedTodos: getIncompleteTodos(state),
    isLoading: getTodosLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onMarkCompleted: id => dispatch(markCompleteRequest(id)),
    startLoadingTodos: () => dispatch(loadTodos()),

})

// (state, actions)(TodoList)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
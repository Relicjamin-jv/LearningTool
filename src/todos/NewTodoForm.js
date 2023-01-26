import React, {useState} from 'react';
import './NewTodoForm.css';
import { connect } from 'react-redux';
import { addTodoRequest } from './thunks';

// connect()(NewTodoForm)

const NewTodoForm = ({todos, onCreatePressed}) => {
    const [inputValue, setInputValue] = useState('');

    return (    
        <div className="new-todo-form">
            <input className="new-todo-input" placeholder="Enter Todo Here" type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            <button className="new-todo-button" onClick={() => {
                const isDuplicateText = 
                    todos.some(todo => todo.text === inputValue);
                
                if(!isDuplicateText){
                    onCreatePressed(inputValue);
                    setInputValue('');
                }
            }}>
                Create Todo
            </button>
        </div>
    );
};

// state is the object that represents the entire redux state, job is to take the state and return picies of that state that we need for this component
const mapStateToProps = (state) => ({
    todos: state.todos, // get the todos global state
});

// dispatch is a function that allows action responses
const mapDispatchToProps = (dispatch) => ({
    onCreatePressed: text => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
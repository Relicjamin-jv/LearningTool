import {CREATE_TODO, REMOVE_TODO, MARK_COMPLETED} from './actions';

// reducers are a just a function that controls a store in the resource store 

// whenever an action is done this is called, it it passed in the state and action that was triggered, they return the updated state
export const todos = (state = [], action) => {
    const {type, payload} = action;

    switch (type) {
        case CREATE_TODO: {
            const {text} = payload; // defined in the action creator
            const newTodo = {text, isCompleted: false};
            return state.concat(newTodo); // never mutate the state
        }

        case REMOVE_TODO: {
            const {text} = payload; // defined in the action creator
            return state.filter(todo => todo.text !== text);
        }

        case MARK_COMPLETED: {
            const {text} = payload; // defined in the action creator
            return state.map(todo => {
                if (todo.text === text){
                    return {text, isCompleted: true};
                }
                return todo;
            }); // if equal text delete it
        }

        default: {
            return state;
        }
    }
}
import {CREATE_TODO, REMOVE_TODO, MARK_COMPLETED, LOAD_TODOS_IN_PROGRESS, LOAD_TODOS_SUCCESS, LOAD_TODOS_FAILURE} from './actions';

// reducers are a just a function that controls a store in the resource store 

// whenever an action is done this is called, it it passed in the state and action that was triggered, they return the updated state
export const todos = (state = [], action) => {
    const {type, payload} = action;

    switch (type) {
        case CREATE_TODO: {
            const {todo} = payload; // defined in the action creator
            return state.concat(todo); // never mutate the state
        }

        case REMOVE_TODO: {
            const {todo: todoToRemove} = payload; // defined in the action creator
            return state.filter(todo => todo.id !== todoToRemove.id);
        }

        case MARK_COMPLETED: {
            const {todo: updatedTodo} = payload; // defined in the action creator
            return state.map(todo => {
                if (todo.id === updatedTodo.id){
                    return updatedTodo;
                }
                return todo;
            }); // if equal text delete it
        }

        case LOAD_TODOS_SUCCESS: {
            const {todos} = payload
            return todos;
        }

        case LOAD_TODOS_IN_PROGRESS: 
        case LOAD_TODOS_FAILURE: 
        default: {
            return state;
        }
    }
}

export const isLoading = (state = false, action) => {
    const {type} = action;

    switch(type){
        case LOAD_TODOS_IN_PROGRESS:
            return true;
        case LOAD_TODOS_SUCCESS:
        case LOAD_TODOS_FAILURE:
            return false;
        default:
            return state;
    }
} 
import {CREATE_TODO, REMOVE_TODO, MARK_COMPLETED, LOAD_TODOS_IN_PROGRESS, LOAD_TODOS_SUCCESS, LOAD_TODOS_FAILURE} from './actions';

// reducers are a just a function that controls a store in the resource store 

const initialState = {isLoading: false, data: []};

// whenever an action is done this is called, it it passed in the state and action that was triggered, they return the updated state
export const todos = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case CREATE_TODO: {
            const {todo} = payload; // defined in the action creator
            return {
                ...state, data: state.data.concat(todo),
            };
        }

        case REMOVE_TODO: {
            const {todo: todoToRemove} = payload; // defined in the action creator
            return {
                ...state, data: state.data.filter(todo => todo.id !== todoToRemove.id),
            };
        }

        case MARK_COMPLETED: {
            const {todo: updatedTodo} = payload; // defined in the action creator
            return {
                ...state, data: state.data.map(todo => {
                    if (todo.id === updatedTodo.id){
                        return updatedTodo;
                    }
                    return todo;
                }),
            };
        }

        case LOAD_TODOS_SUCCESS: {
            const {todos} = payload
            return {
                ...state, isLoading: false, data: todos,
            }
        }

        case LOAD_TODOS_IN_PROGRESS: 
            return{
                ...state, isLoading: true,
            }
        case LOAD_TODOS_FAILURE:
            return{
                ...state, isLoading: false,
            } 
        default: {
            return state;
        }
    }
}

// creating actions
export const CREATE_TODO = "CREATE_TODO";

// action creators, abstracts away any logic
export const createTodo = todo => ({
    type: CREATE_TODO,
    payload: {todo},
});

// another action
export const REMOVE_TODO = "REMOVE_TODO";

export const removeTodo = todo => ({
    type: REMOVE_TODO,
    payload: { todo },
});

// mark as completed action
export const MARK_COMPLETED = "MARK_COMPLETED";

export const markCompleted = text => ({
    type: MARK_COMPLETED,
    payload: { text },
});

export const LOAD_TODOS_IN_PROGRESS = "LOAD_TODOS_IN_PROGRESS";

export const loadTodosInProgress = () => ({
    type: LOAD_TODOS_IN_PROGRESS,
});

export const LOAD_TODOS_SUCCESS = "LOAD_TODOS_SUCCESS";

export const loadTodosSuccess = todos => ({
    type: LOAD_TODOS_SUCCESS,
    payload: {todos},
});

export const LOAD_TODOS_FAILURE = "LOAD_TODOS_FAILURE";

export const loadTodosFailure = () => ({
    type: LOAD_TODOS_FAILURE,
});
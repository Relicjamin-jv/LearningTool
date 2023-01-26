// creating actions
export const CREATE_TODO = "CREATE_TODO";

// action creators, abstracts away any logic
export const createTodo = text => ({
    type: CREATE_TODO,
    payload: {text},
});

// another action
export const REMOVE_TODO = "REMOVE_TODO";

export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text },
});

// mark as completed action
export const MARK_COMPLETED = "MARK_COMPLETED";

export const markCompleted = text => ({
    type: MARK_COMPLETED,
    payload: { text },
})
import {createSelector} from 'reselect'

export const getTodos = state => state.todos.data;

export const getTodosLoading = state => state.todos.isLoading;

// can pass as many selectors as we want
export const getIncompleteTodos = createSelector(getTodos, (todos) => todos.filter(todo => !todo.isCompleted));
export const getCompleteTodos = createSelector(getTodos, (todos) => todos.filter(todo => todo.isCompleted));
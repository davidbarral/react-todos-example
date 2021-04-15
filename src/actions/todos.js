export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: { todo },
});

export const updateTodo = (id, changes) => ({
  type: UPDATE_TODO,
  payload: { id, changes },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

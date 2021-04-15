export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const FETCH_TODOS_START = "FETCH_TODOS_START";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";

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

export const fetchTodos = (promise) => (dispatch) => {
  dispatch({ type: FETCH_TODOS_START });

  Promise.resolve(promise())
    .then((todos) => {
      dispatch({
        type: FETCH_TODOS_SUCCESS,
        payload: { todos },
      });
    })
    .catch((e) => {
      dispatch({
        type: FETCH_TODOS_FAILURE,
        meta: { error: true },
        payload: e,
      });
    });
};

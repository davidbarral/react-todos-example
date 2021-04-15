import {
  ADD_TODO,
  UPDATE_TODO,
  REMOVE_TODO,
  FETCH_TODOS_START,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
} from "../actions/todos";

const initialState = {
  error: false,
  loading: false,
  data: undefined,
};

const todos = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        data: [{ id: new Date().getTime(), ...payload.todo }, ...state.data],
      };

    case UPDATE_TODO:
      return {
        ...state,
        data: state.data.map((todo) => (todo.id === payload.id ? { ...todo, ...payload.changes } : todo)),
      };

    case REMOVE_TODO:
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== payload.id),
      };

    case FETCH_TODOS_START:
      return {
        ...state,
        loading: true,
      };

    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.todos,
      };

    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default todos;

import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from "../actions/todos";

const todos = (state = [], action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO:
      return [{ id: new Date().getTime(), ...payload.todo }, ...state];

    case UPDATE_TODO:
      return state.map((todo) => (todo.id === payload.id ? { ...todo, ...payload.changes } : todo));

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== payload.id);

    default:
      return state;
  }
};

export default todos;

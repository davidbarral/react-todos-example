const thunk = (dispatch) => (next) => (state, action) => {
  if (typeof action === "function") {
    action(dispatch);
    return;
  }
  return next(state, action);
};

export default thunk;

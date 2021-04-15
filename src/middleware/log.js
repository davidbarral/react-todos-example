const log = (dispatch) => (next) => (state, action) => {
  console.group(`Processing ${action?.type}`);
  console.log("Action", action);
  console.log("Previous state", state);

  const nextState = next(state, action);

  console.log("Next state", nextState);
  console.groupEnd();

  return nextState;
};

export default log;

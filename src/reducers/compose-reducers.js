const composeReducers = (spec) => (state = {}, action) =>
  Object.entries(spec).reduce(
    (newState, [key, reducer]) => ({
      ...newState,
      [key]: reducer(state[key], action),
    }),
    {},
  );

export default composeReducers;

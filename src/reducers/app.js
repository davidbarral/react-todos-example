import composeReducers from "./compose-reducers";
import todos from "./todos.js";

const app = composeReducers({
  todos,
});

export default app;

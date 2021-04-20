import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "./state-provider";
import * as actions from "../actions/todos";
import styles from "./todo-form.module.css";

const useAutoFocus = (ref, deps = []) => {
  useEffect(() => {
    ref.current.focus();
  }, [ref, ...deps]); // eslint-disable-line react-hooks/exhaustive-deps
};

const capitalize = (str) => str.replace(/^(.)/, (m) => m.toUpperCase());

const useFormState = (initialState) => {
  const [form, setForm] = useState(initialState);

  const setters = Object.keys(form).reduce(
    (setters, key) => ({
      ...setters,
      [`set${capitalize(key)}`]: (v) => {
        setForm({
          ...form,
          [key]: v,
        });
      },
    }),
    {},
  );

  return {
    ...form,
    ...setters,
  };
};

const TodoForm = () => {
  const { task, pending, setTask, setPending } = useFormState({ task: "", pending: true });
  const taskRef = useRef();
  useAutoFocus(taskRef);

  const addTodo = useDispatch((dispatch, todo) => dispatch(actions.addTodo(todo)));

  const handleTaskChange = (e) => setTask(e.target.value);
  const handlePendingChange = () => setPending(!pending);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ text: task, pending });
    setTask("");
    setPending(true);
    taskRef.current.focus();
  };

  return (
    <form className={styles.TodoForm}>
      <input ref={taskRef} type="text" value={task} placeholder="Task" onChange={handleTaskChange} />
      <label>
        <input type="checkbox" checked={!pending} onChange={handlePendingChange} /> done
      </label>
      <button className={styles.AddTodoButton} onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
};

export default TodoForm;

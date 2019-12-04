import React from "react";

const todos = Array.from(Array(10), (_, i) => ({ id: i, text: `Todo ${i}` }));

const App = () => (
  <>
    <header>
      <h1>My Todos</h1>
    </header>
    <main>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo.text}</li>
        ))}
      </ul>
    </main>
  </>
);


export default App;

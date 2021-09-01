import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([])

  function handleAddTodo(e){
    
  }
  
  return (
    <>
    <TodoList todos = {todos} />
    <input type="text" />
    <button onClick={handleAddTodo}>Add Todo</button>
    <button>Clear Completed Todos</button>
    <div>0 left to do</div>
</>
  )
}

export default App;

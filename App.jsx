import { useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App() {

  /* New todo list item that can be added to the list */
  const [todos, setTodos] = useState([])

  function addTodo(title) {
    /* 
     * The first time setTodos() runs, currentTodos is an
     * empty array and a todo list item is added to the array.
     * Afterwards, each time setTodos() is called, another item
     * is added.
     */
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title,
          completed: false },
      ]
    })
  }

  /*
   * This function takes as arguments the id of the item and a 
   * boolean representing whether the item is checked or not.
   */
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      /* 
       * Traverse the currentTodos array, and for each item in
       * the array, determine if it is the one that is to
       * be toggled
       */
      return currentTodos.map(todo => {
        /*
         * If the current item's id matches the
         * id of the item to be toggled, it is the item to
         * be toggled. Return a new state object with the
         * completed property changed.
         */
        if (todo.id == id) {
          return { ...todo, completed }
        }

        // For each item with an id that doesn't match, keep it as is
        return todo
      })
    })
  }

  /*
   * Return a filtered version of the currentTodos array
   * that returns all todo items except the one with the
   * id passed in as a parameter that is to be removed.
   */
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => (todo.id !== id))
    })
  }

  return (
    <>
      {/*
        * Render the NewTodoForm component in the app page
        * onSubmit is a property on the NewTodoForm that is passed
        * down data from addTodo.
        */}
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      {/* Render TodoList */}
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}
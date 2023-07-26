import { useEffect, useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App() {
  /*
   * New todo list item that can be added to the list.
   * useState() is called whenever the webpage is refreshed
   * or reopened to retrieve data from local storage.
   */
  const [todos, setTodos] = useState(()=> {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) {
      /* Value doesn't exist yet, return empty array */
      return []
    }
    else {
      /* Otherwise, parse and return value inside local storage */
      return JSON.parse(localValue)
    }
  })

  /*
   * The useEffect hook takes the localStorage.setItem() 
   * function as an argument, then runs this function
   * each time the items in the todos array change. This
   * function takes the todos and stores them in local
   * storage. This means the data in the todolist is 
   * permanently stored even when the device is restarted
   * and the browser is refreshed.
   */
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

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
        else {
          // For each item with an id that doesn't match, keep it as is
          return todo
        }
      })
    })
  }

  /*
   * This function allows the user to edit the todo after it
   * has already been added to the list.
   */
  function updateTodo(id) {
    /*
     * Use a boolean to keep track of whether the user
     * has already been prompted to edit the item
     */
    let todoEditPrompted = false

    setTodos(currentTodos => {
      /* 
       * Traverse the currentTodos array, and for each item in
       * the array, determine if it is the one that is to
       * be updated
       */
      return currentTodos.map(todo => {
        /*
         * If it is the item to be edited and the
         * prompt has not appeared yet 
         */
        if ((todo.id == id) && (!todoEditPrompted)) {
          /* Prompt the user to edit the item */
          let editedTodo = prompt(`Edit "${todo.title}"?`, todo.title) 
          todoEditPrompted = true

          /* If the original todo has been changed */
          if (editedTodo != null) {
            /* Set the original todo to the edited todo */
            todo.title = editedTodo;
          }
        }
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
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </>
  )
}
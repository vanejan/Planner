import { useState } from "react"
import "./styles.css"

export default function App() {
  /* 
   * Hook to input, where input is empty string
   * by default. Returns an array of two values:
   * first value is new item, second value is
   * a function to update the state of the item
   * and change the item. When the state variable
   * changes, the app is rendered again.
   */
  const [newItem, setNewItem] = useState("")

  /* New todo list item that can be added to the list */
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    /* preventDefault() prevents page from refreshing */
    e.preventDefault()
    /* 
     * The first time setTodos() runs, currentTodos is an
     * empty array and a todo list item is added to the array.
     * Afterwards, each time setTodos() is called, another item
     * is added.
     */
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem,
          completed: false },
      ]
    })

    /* Clears the input field after an item is added to the list */
    setNewItem("")
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
      {/* onSubmit event listener*/}
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          {/*
            * The value of the input is set to the new item
            * so the input of the item can be updated
            * when it changes. onChange is called each time
            * a key is pressed and is used so it gets the
            * value of the input and sets it as the newItem
            * variable.
            */}
          <input 
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type="text" 
            id="item" 
          />
        </div>
        {/* Button to add items to the list*/}
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {/*
          * The todos array is rendered. For each element
          * in the array, it is returned as an li element.
          */}
        {todos.map(todo => {
          {/* Represents the list items */}
          return (
            /* Give each item a unique key */
            <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed}
              /* 
               * When the item is clicked, the toggleTodo function
               * is called.
               */
              onChange ={e => toggleTodo(todo.id, e.target.checked)} />
              {todo.title}
            </label>
            {/*
              * Represents button to delete a todo list item.
              * When clicked, a function is passed in that calls
              * deleteTodo() with the id of the corresponding item. 
              */}
            <button 
              onClick={() => deleteTodo(todo.id)}
              className="btn btn-danger">Delete</button>
          </li>
          )
        })}
      </ul>
    </>
  )
}
/* Pass in completed, id, and title properties */
export function TodoItem({ completed, id, title, toggleTodo,
deleteTodo }) {
    return (
        <li>
        <label>
          <input 
          type="checkbox" 
          checked={completed}
          /* 
           * When the item is clicked, the toggleTodo function
           * is called.
           */
          onChange ={e => toggleTodo(id, e.target.checked)}
          />
          {title}
        </label>
        {/*
          * Represents button to delete a todo list item.
          * When clicked, a function is passed in that calls
          * deleteTodo() with the id of the corresponding item. 
          */}
        <button 
          onClick={() => deleteTodo(id)}
          className="btn btn-danger">Delete</button>
        </li>
    )
}
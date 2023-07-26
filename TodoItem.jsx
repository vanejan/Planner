/* Pass in completed, id, and title properties */
export function TodoItem({ completed, id, title, toggleTodo,
deleteTodo, updateTodo }) {
    return (
        <li>
        <label className="checkbox">
          <input
          type="checkbox" 
          checked={completed}
          /* 
           * When the item is clicked, the toggleTodo function
           * is called.
           */
          onChange ={e => toggleTodo(id, e.target.checked)}
          />
          <span></span>
          <div className="text-after">{title}</div>
        </label>

        {/*
          * Represents button to edit a todo list item.
          * When clicked, a function is passed in that calls
          * updateTodo() with the id of the corresponding item. 
          */}
        <button 
          onClick={() => updateTodo(id)}
          className="btn btn-edit">
          Edit
        </button>

        {/*
          * Represents button to delete a todo list item.
          * When clicked, a function is passed in that calls
          * deleteTodo() with the id of the corresponding item. 
          */}
        <button 
          onClick={() => deleteTodo(id)}
          className="btn btn-danger">
          Delete
        </button>

        </li>
    )
}
import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
    /* 
     * Hook to input, where input is empty string
     * by default. Returns an array of two values:
     * first value is new item, second value is
     * a function to update the state of the item
     * and change the item. When the state variable
     * changes, the app is rendered again.
     */
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        /* preventDefault() prevents page from refreshing */
        e.preventDefault()
        
        if (newItem === "") return

        /* Represents the addTodo function in App.jsx */
        onSubmit(newItem)
    
        /* Clears the input field after an item is added to the list */
        setNewItem("")
  }

    return (
        /* onSubmit event listener*/
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
    )
}
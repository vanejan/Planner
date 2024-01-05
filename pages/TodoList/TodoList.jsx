import { TodoItem } from "../TodoItem/TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo, updateTodo }) {
    return(
        <ul className="list">
        {/*
          * The todos array is rendered. For each element
          * in the array, it is returned as an li element.
          */}
        {todos.map(todo => {
          {/* Represents the list items */}
          return (
            /*
             * Pass in properties for the todo item.
             * Give each item a unique key.
             * Pass in toggleTodo() and deleteTodo()
             * functions.
             */
            <TodoItem 
                id={todo.id} 
                completed={todo.completed}
                title={todo.title}
                date={todo.date}
                key={todo.id}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
            />
          )
        })}
      </ul>
    )
}
import React from "react";

const ListTodo = ({ todos, deleteTodo }) => {
  return (
    <ul className="p-5">
      {todos && todos.length > 0 ? (
        todos.map((todo) => {
          return (
            <li key={todo._id} onClick={() => deleteTodo(todo._id)}>
              {todo.action}
            </li>
          );
        })
      ) : (
        <li>No todo left</li>
      )}
    </ul>
  );
};

export default ListTodo;

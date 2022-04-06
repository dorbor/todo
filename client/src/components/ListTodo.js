import { Link } from "react-router-dom";
import React from "react";

const ListTodo = ({ todos, deleteTodo }) => {
  return (
    <ul className="p-5">
      {todos && todos.length > 0 ? (
        todos.map((todo) => {
          return (
            <li key={todo._id}>
              {todo.action}
              <div className="float">
                <Link to={`/edit/${todo._id}`}>
                  <button className="edit ">
                    <i className="fas fa-edit"></i>
                  </button>
                </Link>
                <button
                  className="delete mx-2"
                  onClick={() => deleteTodo(todo._id)}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
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

import React, { useState, useEffect } from "react";
import axios from "axios";
// export default EditTodo;
import { useParams, useNavigate } from "react-router-dom";
const EditTodo = () => {
  // declare the state we are going to use for our update
  const [todo, setTodo] = useState({
    id: "",
    action: "",
  });
  // use params to get the id from the url and use navigate to redirect us to the todo after we update
  const params = useParams();
  const navigate = useNavigate();

  // get the data from mongodb once the page load using the params
  useEffect(() => {
    axios.get(`/api/todoAPi/${params.id}`).then((res) => {
      setTodo({
        id: res.data._id,
        action: res.data.action,
      });
    });
  }, []);

  //set the state values once the value in the input field change
  const handleChange = (e) =>
    setTodo({
      id: todo.id,
      action: e.target.value,
    });

  // handle the todo update
  const updateTodo = (id) => {
    const task = { action: todo.action };
    if (task.action && task.action.length > 0) {
      axios
        .patch(`/api/todoAPi/${id}`, task)
        .then((res) => {
          if (window.confirm(res.data)) {
            navigate("/todo");
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("This field can't be empty");
    }
  };

  return (
    <div className="p-5 text-center">
      <buttom> Back</buttom>
      <h3 className="m-3">Kindly hit the update button after editing </h3>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        value={todo.action}
      />
      <button className="btn" onClick={() => updateTodo(todo.id)}>
        update
      </button>
    </div>
  );
};

export default EditTodo;

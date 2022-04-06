import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const EditTodo = () => {
  const navigate = useNavigate();

  const [action, setAction] = useState();

  useEffect(() => {
    loadAction();
  }, []);

  const loadAction = async () => {
    const response = await axios.get("/api/todoAPi/:id");
    setAction(response.data);
  };

  const handleChange = (e) => {
    //     console.log(e.target.value);
    setAction({ ...action, [e.target.name]: e.target.value });
  };

  // const updateTodo = () => {
  //   axios
  //     .put(`/api/todoAPi/${id}`)
  //     .then((res) => {
  //       if (res.data) {
  //         this.getTodos();

  //         navigate.push("/todo");
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div className="p-5 text-center">
      <Container>
        <h3 className="m-5">Kindly hit the update button after editing</h3>
        <input type="text" onChange={(e) => handleChange(e)} value={action} />
        <button className="btn my-1">Update</button>
      </Container>
    </div>
  );
};

export default EditTodo;

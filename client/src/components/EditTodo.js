import axios from "axios";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const EditTodo = () => {
  // const navigate = useNavigate();

  // updateTodo = (id) => {
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
        <input type="text" />
        <button className="btn my-1">Update</button>
      </Container>
    </div>
  );
};

export default EditTodo;

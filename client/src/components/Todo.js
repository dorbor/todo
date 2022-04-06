import React, { Component } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import Input from "./Input";
import ListTodo from "./ListTodo";

class Todo extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    axios
      .get("api/todoAPi/")
      .then((res) => {
        if (res.data) {
          this.setState({
            todos: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  deleteTodo = (id) => {
    if (window.confirm("Are you show you want to delete this review?")) {
      axios
        .delete(`/api/todoAPi/${id}`)
        .then((res) => {
          if (res.data) {
            this.getTodos();
          }
        })
        .catch((err) => console.log(err));
    }
  };

  render() {
    let { todos } = this.state;

    return (
      <div className="text-center py-5">
        <Container>
          <h1>what Need to be done?</h1>
          <Input getTodos={this.getTodos} />
          <ListTodo todos={todos} deleteTodo={this.deleteTodo} />
        </Container>
      </div>
    );
  }
}

export default Todo;

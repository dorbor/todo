import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Register from "./components/Register";
import Login from "./components/Login";
import Todo from "./components/Todo";
import EditTodo from "./components/EditTodo";

function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/edit/:id" element={<EditTodo />} />
        </Routes>

        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;

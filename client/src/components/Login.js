import React, { useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

const Login = () => {
  const [formData, SetFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const onChange = (e) =>
    SetFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      email,
      password,
    };
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify(newUser);
      const res = await axios.post("/api/user", body, config);
      console.log(res.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="py-5">
      <Container>
        {" "}
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Sign Into Your Account
        </p>
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
            <small className="form-text">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              minLength="6"
            />
          </div>

          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
      </Container>
    </div>
  );
};

export default Login;

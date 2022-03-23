import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";

const Login = () => {
  const navigate = useNavigate();

  const [formData, SetFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const onChange = (e) =>
    SetFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();

    const loginUser = {
      email,
      password,
    };
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify(loginUser);
      const res = await axios.post("/api/auth", body, config);
      console.log(res.data);

      if (loginUser) {
        // localStorage.setItem("token", loginUser.data);
        navigate("/todo");
      } else {
        alert("Please check your username and password");
      }
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

// function App() {
// 	const [email, setEmail] = useState('')
// 	const [password, setPassword] = useState('')

// 	async function loginUser(event) {
// 		event.preventDefault()

// 		const response = await fetch('http://localhost:1337/api/login', {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify({
// 				email,
// 				password,
// 			}),
// 		})

// 		const data = await response.json()

// 		if (data.user) {
// 			localStorage.setItem('token', data.user)
// 			alert('Login successful')
// 			window.location.href = '/dashboard'
// 		} else {
// 			alert('Please check your username and password')
// 		}
// 	}

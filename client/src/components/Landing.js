import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Landing = () => {
  return (
    <section className="landing p-5">
      <Container>
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1>Welcome To My Todo List</h1>
            <p className="lead">
              To use this todo list app, you have to login to your account. If
              you don't have an account, kindly sign up to have one.
            </p>
            <div className="buttons p-3">
              <Link to="register" className="btn btn-primary m-3">
                Sign Up
              </Link>
              <Link to="login" className="btn btn-light">
                Login
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Landing;

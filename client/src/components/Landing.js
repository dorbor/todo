import React from "react";
import { Container } from "react-bootstrap";

const Landing = () => {
  return (
    <section className="landing p-5">
      <Container>
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Developer Connector</h1>
            <p className="lead">
              Create a developer profile/portfolio, share posts and get help
              from other developers
            </p>
            <div className="buttons p-3">
              <a href="register.html" className="btn btn-primary m-3">
                Sign Up
              </a>
              <a href="login.html" className="btn btn-light">
                Login
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Landing;

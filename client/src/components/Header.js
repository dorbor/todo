import React from "react";
import axios from "axios";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  const logoutUser = async () => {
    try {
      const res = await axios.post("/api/logout");
      console.log(res);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <header>
        <Navbar expand="lg" collapseOnSelect>
          <Container>
            <Navbar.Brand className="text-light" href="/">
              Todo List App
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                {logoutUser ? (
                  <Nav.Link className="text-light" href="/">
                    <i
                      className="fas fa-sign-out-alt"
                      onCanPlay={(e) => logoutUser()}
                    ></i>{" "}
                    Logout
                  </Nav.Link>
                ) : (
                  <Nav>
                    <Nav.Link className="text-light" href="/login">
                      <i className="fas fa-user"></i> Sign In
                    </Nav.Link>
                    <Nav.Link className="text-light" href="/register">
                      <i className="fas fa-user"></i> Sign Up
                    </Nav.Link>
                  </Nav>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;

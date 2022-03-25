import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
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
                <Nav.Link className="text-light" href="/login">
                  <i className="fas fa-user"></i> Sign In
                </Nav.Link>
                <Nav.Link className="text-light" href="/register">
                  <i className="fas fa-user"></i> Sign Up
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <div>
      <footer>
        <Container>
          <Row>
            <Col className="text-center py-3">
              Copyright &copy; Roviagate Technology LLC {currentYear}
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;

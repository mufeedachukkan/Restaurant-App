import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Nav.Link>
              <Link style={{ textDecoration: "none", color: "white" }} to={"/"}>
                RESTAURANT
              </Link>
            </Nav.Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link style={{ textDecoration: "none", color: "white" }} to={"/"}>
                Home
              </Link>
            </Nav.Link>
            {/* <Nav.Link>
              <Link style={{textDecoration :'none'}} to={"/"}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{textDecoration :'none'}} to={"/review"}>Review</Link>
            </Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

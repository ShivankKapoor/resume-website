import "./Navibar.css";
import {Nav, Navbar } from "react-bootstrap";

function Navibar() {
  return (
    <Navbar bg="light" className="Navigation-Bar">
          <Navbar.Brand className="start" href="#home">Shivank Kapoor</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
          </Nav>
      </Navbar>
  );
}

export default Navibar;

import { Link, useLocation } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "./Navibar.css";

function Navibar() {
  const location = useLocation().pathname;

  return (
    <Navbar collapseOnSelect expand="sm" bg="light" variant="light" className="Navigation-Bar">
      <Navbar.Brand href="/" className="start">Shivank Kapoor</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link to="/" className="nav-link">
            <div className={`nav-item ${location === '/' ? 'active' : ''}`}>Home</div>
          </Link>
          <Link to="/resume" className="nav-link">
            <div className={`nav-item ${location === '/resume' ? 'active' : ''}`}>Resume</div>
          </Link>
          <Link to="/projects" className="nav-link">
            <div className={`nav-item ${location === '/projects' ? 'active' : ''}`}>Projects</div>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navibar;

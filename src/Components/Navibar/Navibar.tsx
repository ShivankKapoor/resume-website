import { Link, useLocation } from "react-router-dom";
import "./Navibar.css";
import { Nav, Navbar } from "react-bootstrap";

function Navibar() {
  const location = useLocation().pathname;

  return (
    <Navbar bg="light" className="Navigation-Bar">
      <Navbar.Brand className="start" href="/">Shivank Kapoor</Navbar.Brand>
      <Nav className="me-auto">
        <button type="button" className="btn btn-light">
          <Link to="/" className="nav-link">
            <div className={location === '/' ? 'underline' : ''}>
              Home
            </div>
          </Link>
        </button>
        <button type="button" className="btn btn-light">
          <Link to="/resume" className="nav-link">
            <div className={location === '/resume' ? 'underline' : ''}>
              Resume
            </div>
          </Link>
        </button>
        <button type="button" className="btn btn-light">
          <Link to="/projects" className="nav-link">
            <div className={location === '/projects' ? 'underline' : ''}>
              Projects
            </div>
          </Link>
        </button>
      </Nav>
    </Navbar>
  );
}

export default Navibar;

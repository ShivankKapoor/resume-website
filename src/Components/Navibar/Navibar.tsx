import { Link, useLocation } from "react-router-dom";
import "./Navibar.css";
import { Nav, Navbar } from "react-bootstrap";

function Navibar() {
  const location = useLocation().pathname;

  return (
    <Navbar bg="light" className="Navigation-Bar">
      <Navbar.Brand className="start" href="/">Shivank Kapoor</Navbar.Brand>
      <Nav className="me-auto">
        <Link to="/" className="nav-link">
          <button type="button" className="btn btn-light">
            <div className={location === '/' ? 'underline' : ''}>
              Home
            </div>
          </button>
        </Link>
        <Link to="/resume" className="nav-link">
          <button type="button" className="btn btn-light">
            <div className={location === '/resume' ? 'underline' : ''}>
              Resume
            </div>
          </button>
        </Link>
        <Link to="/projects" className="nav-link">
          <button type="button" className="btn btn-light">
            <div className={location === '/projects' ? 'underline' : ''}>
              Projects
            </div>
          </button>
        </Link>
      </Nav>
    </Navbar>
  );
}

export default Navibar;

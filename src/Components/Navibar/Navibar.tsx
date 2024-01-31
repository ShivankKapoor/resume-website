import { Link } from "react-router-dom";
import "./Navibar.css";
import { Nav, Navbar } from "react-bootstrap";

function Navibar() {
  const resumeClick = () => {
    window.location.href = "/resume";
  };

  return (
    <Navbar bg="light" className="Navigation-Bar">
      <Navbar.Brand className="start" href="/">Shivank Kapoor</Navbar.Brand>
      <Nav className="me-auto">
        <button type="button" className="btn btn-light">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </button>
        <button type="button" className="btn btn-light">
          <Link to="/resume" className="nav-link">
            Resume
          </Link>
        </button>
        <button type="button" className="btn btn-light">
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
        </button>
      </Nav>
    </Navbar>
  );
}

export default Navibar;

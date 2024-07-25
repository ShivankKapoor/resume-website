import { Link, useLocation } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "./Navibar.css";
import logo from "../../Assets/logo.png";

function Navibar() {
  const location = useLocation().pathname;

  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <Navbar sticky="top" collapseOnSelect expand="sm" bg="light" variant="light" className="Navigation-Bar">
      <img className="logo-img" src={logo} alt="Shivank Kapoor" onClick={handleClick}/>
      <Navbar.Toggle className="mobile-navbar-button" aria-controls="responsive-navbar-nav" />
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

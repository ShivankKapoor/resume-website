import { Link, useLocation } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { IconContext } from "react-icons";
import * as BsIcons from "react-icons/bs";
import "./Navibar.css";
import logo from "../../Assets/logo.png";

function Navibar() {
  const location = useLocation().pathname;

  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <IconContext.Provider value={{ className: "nav-icon" }}>
      <Navbar sticky="top" collapseOnSelect expand="sm" bg="light" variant="light" className="Navigation-Bar">
        <img className="logo-img" src={logo} alt="Shivank Kapoor" onClick={handleClick}/>
        <Navbar.Toggle className="mobile-navbar-button" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              <div className={`nav-item ${location === '/' ? 'active' : ''}`}>
                {location === '/' 
                  ? <span>{BsIcons.BsHouseDoorFill({ 'aria-label': 'Home' })}</span>
                  : <span>{BsIcons.BsHouseDoor({ 'aria-label': 'Home' })}</span>}
                <span>Home</span>
              </div>
            </Link>
            <Link to="/resume" className="nav-link">
              <div className={`nav-item ${location === '/resume' ? 'active' : ''}`}>
                {location === '/resume' 
                  ? <span>{BsIcons.BsFileTextFill({ 'aria-label': 'Resume' })}</span>
                  : <span>{BsIcons.BsFileText({ 'aria-label': 'Resume' })}</span>}
                <span>Resume</span>
              </div>
            </Link>
            <Link to="/projects" className="nav-link">
              <div className={`nav-item ${location === '/projects' ? 'active' : ''}`}>
                {location === '/projects' 
                  ? <span>{BsIcons.BsFolderFill({ 'aria-label': 'Projects' })}</span>
                  : <span>{BsIcons.BsFolder({ 'aria-label': 'Projects' })}</span>}
                <span>Projects</span>
              </div>
            </Link>
          </Nav>
          <Nav className="social-links">
            <a href="https://www.linkedin.com/in/shivankkapoor/" target="_blank" rel="noopener noreferrer" className="nav-link social-link">
              <div className="nav-item">
                <span>{BsIcons.BsLinkedin({ 'aria-label': 'LinkedIn' })}</span>
              </div>
            </a>
            <a href="https://github.com/ShivankKapoor" target="_blank" rel="noopener noreferrer" className="nav-link social-link">
              <div className="nav-item">
                <span>{BsIcons.BsGithub({ 'aria-label': 'GitHub' })}</span>
              </div>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </IconContext.Provider>
  );
}

export default Navibar;

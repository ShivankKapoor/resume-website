import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import project from "./project.png";
import "./ProjectCard.css";

function ProjectCard() {
  var githubLink = " ";
  const githubButtonClick = () => {
    window.open(githubLink, "_blank");
  };
  return (
    <Card style={{ width: "90vw" }} className="project-card">
      <Card.Header className="project-name">
        <h3>Project Name</h3>
      </Card.Header>
      <Card.Body>
        <div className="project-content-container">
          <div className="project-image-container">
            <img className="project-image" src={project} alt="Education Icon" />
          </div>
          <div className="project-info-container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta.
            </p>
            <button
              type="button"
              className="btn show-code-button"
              onClick={githubButtonClick}
            >
              <i className="bi bi-github"></i> Github
            </button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;

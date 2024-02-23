import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./ProjectCard.css";

function ProjectCard() {
  return (
    <div className="education-info-card">
      <Card>
        <Card.Header>
          <h3>Project Name</h3>
        </Card.Header>
        <Card.Body className="flex-row">
          <div className="education-image-container">
            <img className="education-image" src={""} alt="Project Icon" />
          </div>
          <div className="school-info-container">
            <h5>Project Name</h5>
            <text>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </text>
          </div>
        </Card.Body>

      </Card>
    </div>
  );
}

export default ProjectCard;

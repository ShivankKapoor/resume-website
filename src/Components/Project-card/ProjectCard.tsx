import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./ProjectCard.css";

function ProjectCard() {
  return (
    <Card style={{ width: "90vw" }}>
      <Card.Header>Project Name</Card.Header>
      <Card.Body>
        <div className="education-image-container">
          <img className="education-image" src=" " alt="Education Icon" />
        </div>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;

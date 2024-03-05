import React from "react";
import Card from "react-bootstrap/Card";
import "./ProjectCard.css";

type ProjectCardProps = {
  projectName: string;
  projectDesc: string;
  gitHubLink: string;
  projectIcon: string;
};

const ProjectCard: React.FunctionComponent<ProjectCardProps> = ({
  projectName,
  projectDesc,
  gitHubLink,
  projectIcon,
}) => {
  const githubButtonClick = () => {
    window.open(gitHubLink, "_blank");
  };

  return (
    <Card style={{ width: "90vw" }} className="project-card">
      <Card.Header className="project-name">
        <h3>{projectName}</h3>
      </Card.Header>
      <Card.Body>
        <div className="project-content-container">
          <div className="project-image-container">
            <img
              className="project-image"
              src={projectIcon}
              alt="Project Icon"
            />
          </div>
          <div className="project-info-container">
            <p>{projectDesc}</p>
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
};

export default ProjectCard;

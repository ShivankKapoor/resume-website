import React from "react";
import ProjectCard from "../../Components/Project-card/ProjectCard";
import "./Projects.css";
import projectImage from "./project.png";


function Projects() {
  return (
    <>
      <div className="projects-container">
        <ProjectCard
          projectName="Project Name"
          projectDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta."
          gitHubLink="https://github.com/"
          projectIcon={projectImage}
        />
        <ProjectCard
          projectName="Project Name"
          projectDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta."
          gitHubLink="https://github.com/"
          projectIcon={projectImage}
        />
        <ProjectCard
          projectName="Project Name"
          projectDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta."
          gitHubLink="https://github.com/"
          projectIcon={projectImage}
        />
      </div>
    </>
  );
}

export default Projects;

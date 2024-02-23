import React from 'react';
import ProjectCard from '../../Components/Project-card/ProjectCard';
import './Projects.css';

function Projects() {
  return (
    <>
      <div className="projects-container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
}

export default Projects;

import React from 'react';
import ProjectCard from '../../Components/Project-card/ProjectCard';
import './Projects.css';

function Projects() {
  return (
    <>
      <h2>Projects Works</h2>
      <div className="projects-container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
}

export default Projects;

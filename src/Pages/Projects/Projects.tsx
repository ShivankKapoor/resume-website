import React from "react";
import ProjectCard from "../../Components/Project-card/ProjectCard";
import "./Projects.css";
import projectImage from "./project.png";
import reelRater from "./popcorn.png"
import timeToLeave from "./clock.png"
import GPA from "./GPA.png"

function Projects() {
  return (
    <>
      <div className="projects-container">
      <ProjectCard
          projectName="GPA-Analytics"
          projectDesc="Developed a full stack grade-tracking application with an Angular Frontend and a Flask backend. This application allows users to visually track their GPA and do a 'what if' analysis to see how their GPA would be affected if they got a specific grade in a particular class."
          gitHubLink="https://github.com/ShivankKapoor/GPA-Analytics"
          projectIcon={GPA}
        />
        <ProjectCard
          projectName="Reel-Rater"
          projectDesc="Created a movie rating application using Angular, Angular Material, and Pocketbase. This project allows users to rate and track their favorite movies, featuring a user-friendly interface with Angular Material components. The project uses a pocketbase backend that uses SQL and holds up relational database standards."
          gitHubLink="https://github.com/ShivankKapoor/Reel-Rater"
          projectIcon={reelRater}
        />
        <ProjectCard
          projectName="Time To Leave"
          projectDesc="Built an application that sends a notification to the user to let them know when it is time to leave for their next class by calculating the walking time between the building they are currently at to the building they need to be in. Used java's swing toolkit to make the user interface and implemented the Google distance matrix API to calculate walking times."
          gitHubLink="https://github.com/ShivankKapoor/Time-To-Leave-Final"
          projectIcon={timeToLeave}
        />
      </div>
      <div className="subFooterDiv">
      <a href="https://www.flaticon.com" title="camera icons" className="subFooter">Icons created by Freepik - Flaticon</a>
      </div>
    </>
  );
}

export default Projects;

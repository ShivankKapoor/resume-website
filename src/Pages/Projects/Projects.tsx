import ProjectCard from "../../Components/Project-card/ProjectCard";
import "./Projects.css";
import reelRater from "../../Assets/popcorn.png"
import Attendance from "../../Assets/tracker.png"
import GPA from "../../Assets/GPA.png"

function Projects() {
  return (
    <>
      <div className="projects-container">
      <ProjectCard
          projectName="Attendance Tracker"
          projectDesc="Led a team of four developers to design and implement an attendance tracker application, which is now used by over 300 students at the University of Texas at Dallas. Our system has achieved a 90% satisfaction rate among surveyed students who prefer it over traditional attendance methods. The front end was developed using JavaScript and HTML while architecting and developing the back end with Spring Boot, SQL, and an administrative console using Java’s Swing toolkit."
          gitHubLink="https://github.com/ShivankKapoor/project-attendance"
          projectIcon={Attendance}
        />
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
      </div>
      <div className="subFooterDiv">
      <a href="https://www.flaticon.com" title="camera icons" className="subFooter">Icons created by Freepik - Flaticon</a>
      </div>
    </>
  );
}

export default Projects;

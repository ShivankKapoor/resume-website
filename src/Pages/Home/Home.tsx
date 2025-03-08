import "./Home.css";
import ProfileOverviewCard from "../../Components/Profile-Overview-Card/ProfileOverviewCard";
import EducationSection from "../../Components/Education-Section/EducationSection";
import ExperienceSection from "../../Components/Experience-Section/ExperienceSection";
import shivank_pic from "../../Assets/shivank_pic.jpeg";
import BHN from "../../Assets/BHN.jpg"
import motio from "../../Assets/motio.jpg"
import UTD from "../../Assets/UTD.jpg"
import SkillsSection from "../../Components/Skills-Section/SkillsSection";
import CoursesSection from "../../Components/Courses-Section/CoursesSection";

const experiences = [
  {
    workIcon: BHN,
    position: "Software Engineer",
    employer: "Blackhawk Network",
    startMonthYear: "07/2024",
    endMonthYear: "Present",
    description: "                                                                                                                                                                                  ",
  },
  {
    workIcon: motio,
    position: "Software Engineer Intern",
    employer: "Motio, Inc.",
    startMonthYear: "05/2023",
    endMonthYear: "12/2023",
    description: "Worked on the MotioCI application, a specialized platform for managing and enhancing IBM Cognos BI (Business Intelligence) environments. Developed new responsive user interfaces using Angular JS, TypeScript, HTML, and CSS for the MotioCI application. Collaborated closely with the back-end team to integrate GraphQL APIs, ensuring efficient data retrieval and display. Translated design specifications into visually appealing and functional user interfaces for MotioCI. Actively participated in code reviews and agile development sprints to maintain and develop quality software.",
  }
];

const skillsList = [
  { skillName: "TypeScript", devIconName: "devicon-typescript-plain" },
  { skillName: "Python", devIconName: "devicon-python-plain" },
  { skillName: "Java", devIconName: "devicon-java-plain" },
  { skillName: "C++", devIconName: "devicon-cplusplus-plain" },
  { skillName: "C", devIconName: "devicon-c-plain" },
  { skillName: "HTML", devIconName: "devicon-html5-plain" },
  { skillName: "CSS", devIconName: "devicon-css3-plain" },
  { skillName: "SQL", devIconName: "devicon-azuresqldatabase-plain" },
  { skillName: "Jenkins", devIconName: "devicon-jenkins-line" },
  { skillName: "Jasmine", devIconName: "devicon-jasmine-plain" },
  { skillName: "Docker", devIconName: "devicon-docker-plain" },
  { skillName: "Markdown", devIconName: "devicon-markdown-original" },
  { skillName: "Git", devIconName: "devicon-git-plain" },
  { skillName: "Angular", devIconName: "devicon-angularjs-plain" },
  { skillName: "RxJs", devIconName: "devicon-rxjs-plain" },
  { skillName: "Flask", devIconName: "devicon-flask-original" },
  { skillName: "Spring Boot", devIconName: "devicon-spring-plain" },
  { skillName: "Firebase", devIconName: "devicon-firebase-plain" },
  { skillName: "Unix", devIconName: "devicon-linux-plain" },
  { skillName: "Swing", devIconName: "devicon-java-plain" },
  { skillName: "Tkinter", devIconName: "devicon-python-plain" },
  { skillName: "GitLab", devIconName: "devicon-gitlab-plain" },
];

function Home() {
  return (
    <>
      <ProfileOverviewCard
        firstName="Shivank"
        lastName="Kapoor"
        description="Computer Science Graduate from the University of Texas at Dallas"
        profilePicture={shivank_pic}
        linkedinLink="https://www.linkedin.com/in/shivankkapoor/"
        githubLink="https://github.com/ShivankKapoor"
      />

      <EducationSection
        schoolName="The University of Texas at Dallas"
        schoolLogo={UTD}
        degreeTitle="Bachelor of Science"
        degreeMajor="Computer Science"
        yearStart={2020}
        yearEnd={2024}
      />

      <ExperienceSection
        experiences={experiences}
      />

      <SkillsSection skills={skillsList} />

      <CoursesSection
        Courses={[
          "Data Structures",
          "Programming in Unix",
          "Algorithm Analysis",
          "Database Management",
          "Software Engineering",
          "Object Oriented Design",
          "Operating Systems",
          "Machine Learning",
        ]}
      ></CoursesSection>

      <p></p>
    </>
  );
}

export default Home;

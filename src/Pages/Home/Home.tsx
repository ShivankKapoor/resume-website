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

      <SkillsSection
        skills={[
          "TypeScript",
          "Python",
          "Java",
          "C++",
          "C",
          "HTML",
          "CSS",
          "SQL",
          "Jenkins",
          "Jasmine",
          "Docker",
          "Markdown",
          "Git",
          "Angular",
          "RxJs",
          "Flask",
          "Spring Boot",
          "RESTful APIs",
          "Firebase",
          "Unix",
          "Swing",
          "Tkinter",
          "GitLab",
        ]}
      />

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

import "./Home.css";
import ProfileOverviewCard from "../../Components/Profile-Overview-Card/ProfileOverviewCard";
import profile from "./profile.jpg";
import EducationSection from "../../Components/Education-Section/EducationSection";
import edu from "./edu.png";
import ExperienceSection from "../../Components/Experience-Section/ExperienceSection";
import work from "./work.png";
import SkillsSection from "../../Components/Skills-Section/SkillsSection";
import CoursesSection from "../../Components/Courses-Section/CoursesSection";

function Home() {
  return (
    <>
      <ProfileOverviewCard
        firstName="Shivank"
        lastName="Kapoor"
        description="
        Computer Science Student at the University of Texas at Dallas"
        profilePicture="https://media.licdn.com/dms/image/D5603AQG-YIdZoHjVmg/profile-displayphoto-shrink_200_200/0/1666035409378?e=1715212800&v=beta&t=n3P4Iro_psOBVr1iDmwGNL6wkJBX_lEFXxDw0ssngFc"
        linkedinLink="https://www.linkedin.com/in/shivankkapoor/"
        githubLink="https://github.com/ShivankKapoor"
      ></ProfileOverviewCard>

      <EducationSection
        schoolName="The University of Texas at Dallas"
        schoolLogo="https://yt3.googleusercontent.com/ytc/AIdro_mZBJGJC27mRaJSqFsKlLUxn4IOPl5godX8Shxi9A=s176-c-k-c0x00ffffff-no-rj"
        degreeTitle="Bachelor of Science"
        degreeMajor="Computer Science"
        yearStart={2020}
        yearEnd={2024}
      ></EducationSection>

      <ExperienceSection
        workIcon="https://motio.com/wp-content/uploads/2020/12/motio-logo.png"
        position="Software Engineer Intern"
        employer="Motio, Inc."
        startMonthYear="05/2023"
        endMonthYear="12/2023"
        description="Worked on the MotioCI application, a specialized platform for managing and enhancing IBM Cognos BI (Business Intelligence) environments. Developed new responsive user interfaces using Angular JS, TypeScript, HTML, and CSS for the MotioCI application. Collaborated closely with the back-end team to integrate GraphQL APIs, ensuring efficient data retrieval and display. Translated design specifications into visually appealing and functional user interfaces for MotioCI. Actively participated in code reviews and agile development sprints to maintain and develop quality software."
      ></ExperienceSection>

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
          "RESTful APIs",
          "Firebase",
          "Unix",
          "Swing",
          "Tkinter",
          "GitLab",
        ]}
      ></SkillsSection>

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

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
        firstName="Firstname"
        lastName="Lastname"
        description="
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla."
        profilePicture={profile}
        linkedinLink="https://www.linkedin.com/"
        githubLink="https://github.com/"
      ></ProfileOverviewCard>

      <EducationSection
        schoolName="University of State"
        schoolLogo={edu}
        degreeTitle="Degree Title"
        degreeMajor="Degree Major"
        yearStart={1776}
        yearEnd={9999}
      ></EducationSection>

      <ExperienceSection
        workIcon={work}
        position="Position"
        employer="Employer"
        startMonthYear="MM/YYYY"
        endMonthYear="MM/YYYY"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      ></ExperienceSection>

      <SkillsSection
        skills={[
          "Skills #1",
          "Skills #2",
          "Skills #3",
          "Skills #4",
          "Skills #5",
          "Skills #6",
          "Skills #7",
          "Skills #8",
          "Skills #9",
          "Skills #10",
          "Skills #11",
          "Skills #12",
          "Skills #13",
          "Skills #14",
          "Skills #15",
          "Skills #16",
          "Skills #17",
          "Skills #18",
          "Skills #19",
          "Skills #20",
          "Skills #21",
        ]}
      ></SkillsSection>

      <CoursesSection
        Courses={[
          "Class/Course #1",
          "Class/Course #2",
          "Class/Course #3",
          "Class/Course #4",
          "Class/Course #5",
          "Class/Course #6",
          "Class/Course #7",
          "Class/Course #8",
        ]}
      ></CoursesSection>

      <p></p>
    </>
  );
}

export default Home;

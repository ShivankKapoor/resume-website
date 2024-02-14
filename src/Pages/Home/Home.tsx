import "./Home.css";
import ProfileOverviewCard from "../../Components/Profile-Overview-Card/ProfileOverviewCard";

function Home() {
  return (
    <>
      <ProfileOverviewCard firstName="Shivank" lastName="Kapoor" description="
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla." linkedinLink="https://www.linkedin.com/" githubLink="https://github.com/"></ProfileOverviewCard>
    </>
  );
}

export default Home;

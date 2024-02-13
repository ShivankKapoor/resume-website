import Card from "react-bootstrap/Card";
import "./Home.css";
import profile from "./profile.jpg";

function Home() {
  return (
    <div className="home-container">
      <div className="profile-image-div">
        <img
          src={profile}
          className="rounded mx-auto d-block profile-image"
          alt="Profile Image"
        />
      </div>
      <div className="title-card">
        <Card className="card">
          <Card.Body className="card-body">
            <Card.Title className="card-title">Firstname Lastname</Card.Title>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla.
            <div>
            <button type="button" className="btn linkdinButton">Primary</button>
            <button type="button" className="btn gitHubButton">Primary</button>
            </div>
          </Card.Body>
          
        </Card>
      </div>
    </div>
  );
}

export default Home;

import Card from "react-bootstrap/Card";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="title-card">
        <Card className="card">
          <Card.Body>
            <Card.Title className="card-title">Firstname Lastname</Card.Title>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla.
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Home;

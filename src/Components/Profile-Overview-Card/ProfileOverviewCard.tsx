import { FunctionComponent } from "react";
import "./ProfileOverviewCard.css";
import Card from "react-bootstrap/Card";
import profile from "./profile.jpg";

type ProfileOverviewCardProps = {
    firstName: string,
    lastName: string,
    description: string,
    linkedinLink: string,
    githubLink: string
}


export const ProfileOverviewCard: FunctionComponent<ProfileOverviewCardProps> = ({ firstName, lastName, description, linkedinLink, githubLink }) => {
    const linkedinButtonClick = () =>{
        window.open(linkedinLink,"_blank");
    }
    const githubButtonClick = () =>{
        window.open(githubLink,"_blank");
    }
    return (
        <div className="card-container">
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
                        <Card.Title className="card-title">{firstName} {lastName}</Card.Title>
                        {description}
                        <div>
                            <button type="button" className="btn linkdinButton" onClick={linkedinButtonClick}>
                                <i className="bi bi-linkedin"></i> Linkedin
                            </button>
                            <button type="button" className="btn gitHubButton" onClick={githubButtonClick}>
                                <i className="bi bi-github"></i> Github
                            </button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default ProfileOverviewCard;
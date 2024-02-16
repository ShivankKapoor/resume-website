import { FunctionComponent } from "react";
import "./ExperienceSection.css";
import { Card } from "react-bootstrap";
import work from "./work.png";

type ExperienceSectionProps = {};

export const ExperienceSection: FunctionComponent<
  ExperienceSectionProps
> = ({}) => {
  return (
    <div className="experience-info-card">
      <Card>
        <Card.Header>
          <h3>Experience</h3>
        </Card.Header>
        <Card.Body className="flex-row">
          <div className="experience-image-container">
            <img className="experience-image" src={work} alt="Education Icon" />
          </div>
          <div className="experience-info-container">
            <h5>Position</h5>
            <h6>Employer</h6>
            <text>MM/YYYY - MM/YYYY</text>
            <div className="experience-description">
              <text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </text>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ExperienceSection;

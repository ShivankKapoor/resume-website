import { FunctionComponent } from "react";
import "./ExperienceSection.css";
import { Card } from "react-bootstrap";


type ExperienceSectionProps = {
  workIcon: string,
  position: string,
  employer: string,
  startMonthYear: string,
  endMonthYear: string,
  description: string,
};

export const ExperienceSection: FunctionComponent<
  ExperienceSectionProps
> = ({ workIcon, position, employer, startMonthYear, endMonthYear, description }) => {
  return (
    <div className="experience-info-card">
      <Card>
        <Card.Header>
          <h3>Experience</h3>
        </Card.Header>
        <Card.Body className="flex-row">
          <div className="experience-image-container">
            <img className="experience-image" src={workIcon} alt="Education Icon" />
          </div>
          <div className="experience-info-container">
            <h5>{position}</h5>
            <h6>{employer}</h6>
            <text>{startMonthYear} - {endMonthYear}</text>
            <div className="experience-description">
              <text>
                {description}
              </text>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ExperienceSection;

import { FunctionComponent } from "react";
import "./ExperienceSection.css";
import { Card } from "react-bootstrap";
import { Experience } from "../../objects/Experience";

type ExperienceSectionProps = {
  experiences: Experience[],
};

export const ExperienceSection: FunctionComponent<
  ExperienceSectionProps
> = ({ experiences }) => {
  return (
    <div className="experience-info-card">
      <Card className="experience-card">
        <Card.Header>
          <h3>Experience</h3>
        </Card.Header>
        <Card.Body className="flex-column">
          {experiences.map((experience, index) => (
            <div key={index} className={`experience-item ${index !== 0 ? 'experience-item-old' : ''}`}>
              <div className="experience-image-container">
                <img className="experience-image" src={experience.workIcon} alt="Experience Icon" />
              </div>
              <div className="experience-info-container">
                <h5>{experience.position}</h5>
                <h6>{experience.employer}</h6>
                <text>{experience.startMonthYear} - {experience.endMonthYear}</text>
                <div className="experience-description">
                  <p>{experience.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ExperienceSection;

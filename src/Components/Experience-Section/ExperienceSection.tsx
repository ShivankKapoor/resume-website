import { FunctionComponent } from "react";
import "./ExperienceSection.css";
import { Card } from "react-bootstrap";

type ExperienceSectionProps = {};

export const ExperienceSection: FunctionComponent<
  ExperienceSectionProps
> = ({}) => {
  return (
    <div className="experience-card">
      <Card>
        <Card.Header>
          <h3>Experience</h3>
        </Card.Header>
        <Card.Body>
            
        </Card.Body>
      </Card>
    </div>
  );
};

export default ExperienceSection;

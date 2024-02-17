import React, { FunctionComponent } from "react";
import "./SkillsSection.css";
import { Card } from "react-bootstrap";

type skillsSectionProps = {
  skills: any[];
};

export const SkillsSection: FunctionComponent<skillsSectionProps> = ({
  skills,
}) => {
  // Splitting skills into four equal parts
  const chunkSize = Math.ceil(skills.length / 4);
  const chunkedSkills = Array.from({ length: 4 }, (_, i) =>
    skills.slice(i * chunkSize, (i + 1) * chunkSize)
  );

  return (
    <div className="skills-info-card">
      <Card>
        <Card.Header>
          <h3>Skills</h3>
        </Card.Header>
        <Card.Body>
          <div className="row">
            {chunkedSkills.map((chunk, index) => (
              <div key={index} className="col">
                <ul className="list-group list-group-flush">
                  {chunk.map((skill, skillIndex) => (
                    <li key={skillIndex} className="list-group-item">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SkillsSection;

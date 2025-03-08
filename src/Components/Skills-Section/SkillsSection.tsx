import React, { FunctionComponent } from "react";
import "./SkillsSection.css";
import { Card } from "react-bootstrap";

type skillsSectionProps = {
  skills: string[];
};

const skillIcons: { [key: string]: string } = {
  "TypeScript": "devicon-typescript-plain",
  "Python": "devicon-python-plain",
  "Java": "devicon-java-plain",
  "C++": "devicon-cplusplus-plain",
  "C": "devicon-c-plain",
  "HTML": "devicon-html5-plain",
  "CSS": "devicon-css3-plain",
  "SQL": "devicon-postgresql-plain",
  "Jenkins": "devicon-jenkins-line",
  "Jasmine": "devicon-jasmine-plain",
  "Docker": "devicon-docker-plain",
  "Markdown": "devicon-markdown-original",
  "Git": "devicon-git-plain",
  "Angular": "devicon-angularjs-plain",
  "RxJs": "devicon-rxjs-original",
  "Flask": "devicon-flask-original",
  "Spring Boot": "devicon-spring-plain",
  "RESTful APIs": "devicon-nodejs-plain",
  "Firebase": "devicon-firebase-plain",
  "Unix": "devicon-linux-plain",
  "Swing": "devicon-java-plain",
  "Tkinter": "devicon-python-plain",
  "GitLab": "devicon-gitlab-plain",
};

export const SkillsSection: FunctionComponent<skillsSectionProps> = ({
  skills,
}) => {
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
                    <li key={skillIndex} className="list-group-item skill-item">
                      <i className={`${skillIcons[skill] || "devicon-devicon-plain"} skill-icon`}></i>
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

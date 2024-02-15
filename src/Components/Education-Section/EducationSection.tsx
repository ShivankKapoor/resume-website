import { FunctionComponent } from "react";
import "./EducationSection.css";
import { Card } from "react-bootstrap";
import edu from "./edu.png";

type EducationSectionProps = {
    schoolName: string,
    schoolLogo: string,
    degreeTitle: string,
    degreeMajor: string,
    yearStart: number,
    yearEnd: number
}

export const EducationSection: FunctionComponent<EducationSectionProps> = ({ schoolName, schoolLogo, degreeTitle, degreeMajor, yearStart, yearEnd }) => {
    return (
        <div className="education-info-card">
            <Card>
                <Card.Header>
                    <h3>Education</h3>
                </Card.Header>
                <Card.Body className="flex-row">
                    <div className="education-image-container">
                        <img className="education-image" src={edu} alt="Education Icon" />
                    </div>
                    <div className="school-info-container">
                        <h5>School Name</h5>
                        <h6>Bachelor's degree, (Degree Subject)</h6>
                        <text>Start Year - End year</text>
                    </div>
                </Card.Body>
            </Card>
        </div>

    )
}

export default EducationSection;
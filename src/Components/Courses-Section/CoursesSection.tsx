import React, { FunctionComponent } from "react";
import "./CoursesSection.css";
import { Card } from "react-bootstrap";

type CoursesSectionProps = {
    Courses: any[];
};

export const CoursesSection: FunctionComponent<CoursesSectionProps> = ({
    Courses,
}) => {
    const chunkSize = Math.ceil(Courses.length / 4);
    const chunkedCourses = Array.from({ length: 4 }, (_, i) =>
        Courses.slice(i * chunkSize, (i + 1) * chunkSize)
    );

    return (
        <div className="courses-info-card">
            <Card>
                <Card.Header>
                    <h3>Courses</h3>
                </Card.Header>
                <Card.Body>
                    <div className="row">
                        {chunkedCourses.map((chunk, index) => (
                            <div key={index} className="col">
                                <ul className="list-group list-group-flush">
                                    {chunk.map((courses, coursesIndex) => (
                                        <li key={coursesIndex} className="list-group-item">
                                            {courses}
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

export default CoursesSection;

import { FunctionComponent } from "react";
import "./EducationSection.css";

type EducationSectionProps = {
    schoolName:string,
    schoolLogo:string,
    degreeTitle:string,
    degreeMajor:string,
    yearStart:number,
    yearEnd:number
}

export const EducationSection: FunctionComponent<EducationSectionProps> = ({ schoolName, schoolLogo, degreeTitle, degreeMajor, yearStart, yearEnd }) => {
    return(
        <></>
    )
}

export default EducationSection;
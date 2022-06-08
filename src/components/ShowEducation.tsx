import React from "react";
import { EducationInterface } from "./EducationInterface";
interface Props {
  educations: Array<EducationInterface>;
}

export function ShowEducation(props: Props) {
  return (
    <div className="section">
      {props.educations.map((education) => {
        return (
          <div key={education.id}>
            <button>Edit</button>
            <p>
              {education.startYear} - {education.endYear}
            </p>
            <p>{education.schoolName}</p>
            <p>{education.degree}</p>
          </div>
        );
      })}
    </div>
  );
}

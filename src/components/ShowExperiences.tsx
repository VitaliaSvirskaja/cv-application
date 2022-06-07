import React from "react";
import { Experience } from "../Experience";
interface Props {
  experiences: Array<Experience>;
}

export function Showexperiences(props: Props) {
  return (
    <div className="section">
      {props.experiences.map((experience) => {
        return (
          <div key={experience.id}>
            <button>Edit</button>
            <p>
              {experience.startYear} - {experience.endYear}
            </p>
            <p>{experience.company}</p>
            <p>{experience.position}</p>
            <p>{experience.jobDescription}</p>
          </div>
        );
      })}
    </div>
  );
}

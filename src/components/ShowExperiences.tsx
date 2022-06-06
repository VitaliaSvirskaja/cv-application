import React from "react";
interface Props {
  startYear: number | "";
  endYear: number | "";
  companyName: string;
  position: string;
  jobTasks: string;
}

export function Showexperiences(props: Props) {
  return (
    <div>
      <p>
        {props.startYear} - {props.endYear}
      </p>
      <p>{props.companyName}</p>
      <p>{props.position}</p>
      <p>{props.jobTasks}</p>
    </div>
  );
}

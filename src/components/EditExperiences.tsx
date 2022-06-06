import React from "react";

interface Props {
  startYear: number | "";
  endYear: number | "";
  companyName: string;
  position: string;
  jobTasks: string;
  onChangeCompanyName: (updatedCompanyName: string) => void;
  onChangeStartYear: (updatetStartYear: number) => void;
  onChangeEndYear: (updatetEndYear: number) => void;
  onChangePosition: (updatetPosition: string) => void;
  onChangeJobTask: (updatetJobTask: string) => void;
}

export function Editexperiences(props: Props) {
  return (
    <form className="input-container">
      <input
        type="number"
        name="startYear"
        id="startYear"
        placeholder="start year"
        value={props.startYear}
        onChange={(event) => {
          props.onChangeStartYear(parseInt(event.target.value));
        }}
      />
      <input
        type="number"
        name="endYear"
        id="endYear"
        placeholder="end year (current year)"
        value={props.endYear}
        onChange={(event) => {
          props.onChangeEndYear(parseInt(event.target.value));
        }}
      />
      <input
        type="text"
        name="companyName"
        id="companyName"
        placeholder="Name of Company"
        value={props.companyName}
        onChange={(event) => {
          props.onChangeCompanyName(event.target.value);
        }}
      />
      <input
        type="text"
        name="position"
        id="position"
        placeholder="Job Position"
        value={props.position}
        onChange={(event) => {
          props.onChangePosition(event.target.value);
        }}
      />
      <textarea
        maxLength={500}
        placeholder="Job description"
        value={props.jobTasks}
        onChange={(event) => {
          props.onChangeJobTask(event.target.value);
        }}
      ></textarea>
    </form>
  );
}

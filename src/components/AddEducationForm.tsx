import React, { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { EducationInterface } from "./EducationInterface";

interface Props {
  onCancelCLick: () => void;
  onAddNewEducation: (education: EducationInterface) => void;
}

export function AddEducationForm(props: Props) {
  const [startYearInput, setStartYearInput] = useState<number | "">("");
  const [endYearInput, setEndYearInput] = useState<number | "">("");
  const [schoolName, setSchoolName] = useState("");
  const [degree, setDegree] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (
      startYearInput === "" ||
      endYearInput === "" ||
      schoolName === "" ||
      degree === ""
    ) {
      alert("Please fill in all fields!");
    } else if (endYearInput < startYearInput) {
      alert("The end year can't be smaller than the start year!");
    } else {
      const newEducation: EducationInterface = {
        id: uuidv4(),
        startYear: startYearInput,
        endYear: endYearInput,
        schoolName: schoolName,
        degree: degree,
      };
      props.onAddNewEducation(newEducation);
      setStartYearInput("");
      setEndYearInput("");
      setSchoolName("");
      setDegree("");
    }
  }

  return (
    <div className="section">
      <form className="input-container" onSubmit={handleSubmit}>
        <input
          type="number"
          name="startYear"
          id="startYear"
          placeholder="start year"
          value={startYearInput}
          onChange={(event) => {
            setStartYearInput(parseInt(event.target.value));
          }}
        />
        <input
          type="number"
          name="endYear"
          id="endYear"
          placeholder="end year (current year)"
          value={endYearInput}
          onChange={(event) => {
            setEndYearInput(parseInt(event.target.value));
          }}
        />
        <input
          type="text"
          name="schoolName"
          id="schoolName"
          placeholder="Name of School"
          value={schoolName}
          onChange={(event) => {
            setSchoolName(event.target.value);
          }}
        />
        <input
          type="text"
          name="degree"
          id="degree"
          placeholder="Degree"
          value={degree}
          onChange={(event) => {
            setDegree(event.target.value);
          }}
        />
        <button type="submit">Submit</button>
        <button onClick={props.onCancelCLick}>Cancel</button>
      </form>
    </div>
  );
}

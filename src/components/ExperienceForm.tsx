import React, { FormEvent, useEffect, useState } from "react";
import { Experience } from "../Experience";
import { v4 as uuidv4 } from "uuid";

interface Props {
  onCancelCLick: () => void;
  experienceToBeEdited: Experience | null;
  onSave: (experienceToBeSaved: Experience) => void;
}

export function ExperienceForm(props: Props) {
  const [startYearInput, setStartYearInput] = useState<number | "">("");
  const [endYearInput, setEndYearInput] = useState<number | "">("");
  const [companyNameInput, setCompanyNameInput] = useState("");
  const [positionInput, setPositionInput] = useState("");
  const [jobTaskInput, setJobTaskInput] = useState("");

  useEffect(() => {
    setStartYearInput(props.experienceToBeEdited?.startYear ?? "");
    setEndYearInput(props.experienceToBeEdited?.endYear ?? "");
    setCompanyNameInput(props.experienceToBeEdited?.company ?? "");
    setPositionInput(props.experienceToBeEdited?.position ?? "");
    setJobTaskInput(props.experienceToBeEdited?.jobDescription ?? "");
  }, [props.experienceToBeEdited]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (
      startYearInput === "" ||
      endYearInput === "" ||
      companyNameInput === "" ||
      positionInput === "" ||
      jobTaskInput === ""
    ) {
      alert("Please fill in all fields!");
    } else if (endYearInput < startYearInput) {
      alert("The end year can't be smaller than the start year!");
    } else {
      const experienceToBeSaved: Experience = {
        id: props.experienceToBeEdited?.id ?? uuidv4(),
        startYear: startYearInput,
        endYear: endYearInput,
        company: companyNameInput,
        position: positionInput,
        jobDescription: jobTaskInput,
      };
      props.onSave(experienceToBeSaved);
    }
    setStartYearInput("");
    setEndYearInput("");
    setCompanyNameInput("");
    setPositionInput("");
    setJobTaskInput("");
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
          name="companyName"
          id="companyName"
          placeholder="Name of Company"
          value={companyNameInput}
          onChange={(event) => {
            setCompanyNameInput(event.target.value);
          }}
        />
        <input
          type="text"
          name="position"
          id="position"
          placeholder="Job Position"
          value={positionInput}
          onChange={(event) => {
            setPositionInput(event.target.value);
          }}
        />
        <textarea
          maxLength={500}
          placeholder="Job description"
          value={jobTaskInput}
          onChange={(event) => {
            setJobTaskInput(event.target.value);
          }}
        ></textarea>
        <button type="submit">Submit</button>
        <button onClick={props.onCancelCLick}>Cancel</button>
      </form>
    </div>
  );
}

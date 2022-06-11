import { Button, TextField } from "@mui/material";
import React, { FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { EducationInterface } from "./EducationInterface";

interface Props {
  onCancelCLick: () => void;
  educationToBeEdited: EducationInterface | null;
  onSave: (educationToBeSaved: EducationInterface) => void;
}

export function EducationForm(props: Props) {
  const [startYearInput, setStartYearInput] = useState<number | "">("");
  const [endYearInput, setEndYearInput] = useState<number | "">("");
  const [schoolName, setSchoolName] = useState("");
  const [degree, setDegree] = useState("");

  useEffect(() => {
    setStartYearInput(props.educationToBeEdited?.startYear ?? "");
    setEndYearInput(props.educationToBeEdited?.endYear ?? "");
    setSchoolName(props.educationToBeEdited?.schoolName ?? "");
    setDegree(props.educationToBeEdited?.degree ?? "");
  }, [props.educationToBeEdited]);

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
      const educationToBeSaved: EducationInterface = {
        id: props.educationToBeEdited?.id ?? uuidv4(),
        startYear: startYearInput,
        endYear: endYearInput,
        schoolName: schoolName,
        degree: degree,
      };
      props.onSave(educationToBeSaved);
    }
    setStartYearInput("");
    setEndYearInput("");
    setSchoolName("");
    setDegree("");
  }

  return (
    <div className="section">
      <form className="input-container" onSubmit={handleSubmit}>
        <TextField
          size="small"
          id="outlined-number"
          label="Start year"
          type="number"
          name="startYear"
          placeholder="start year"
          value={startYearInput}
          onChange={(event) => {
            setStartYearInput(parseInt(event.target.value));
          }}
        />
        <TextField
          size="small"
          id="outlined-number"
          label="End year"
          type="number"
          name="endYear"
          placeholder="end year (current year)"
          value={endYearInput}
          onChange={(event) => {
            setEndYearInput(parseInt(event.target.value));
          }}
        />
        <TextField
          size="small"
          id="outlined-basic"
          label="Name of school"
          variant="outlined"
          name="schoolName"
          placeholder="Name of School"
          value={schoolName}
          onChange={(event) => {
            setSchoolName(event.target.value);
          }}
        />
        <TextField
          size="small"
          id="outlined-basic"
          label="Degree"
          variant="outlined"
          name="degree"
          placeholder="Degree"
          value={degree}
          onChange={(event) => {
            setDegree(event.target.value);
          }}
        />

        <Button variant="contained" size="small" type="submit">
          Submit
        </Button>
        <Button variant="contained" size="small" onClick={props.onCancelCLick}>
          Cancel
        </Button>
      </form>
    </div>
  );
}

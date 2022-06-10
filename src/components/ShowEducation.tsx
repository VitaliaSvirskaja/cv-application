import React from "react";
import { EducationInterface } from "./EducationInterface";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

interface Props {
  educations: Array<EducationInterface>;
  onDeleteEducation: (educationID: string) => void;
}

export function ShowEducation(props: Props) {
  return (
    <div className="section">
      {props.educations.map((education) => {
        return (
          <div key={education.id}>
            <IconButton>
              <ModeEditIcon />
            </IconButton>
            <IconButton onClick={() => props.onDeleteEducation(education.id)}>
              <DeleteIcon />
            </IconButton>
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

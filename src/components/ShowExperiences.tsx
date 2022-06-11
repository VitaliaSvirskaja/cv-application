import React, { MouseEventHandler } from "react";
import { Experience } from "../Experience";
import { IconButton } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
interface Props {
  experiences: Array<Experience>;
  onDeleteExperience: (experienceID: string) => void;
  onEditClick: (experienceID: string) => void;
}

export function Showexperiences(props: Props) {
  return (
    <div className="section">
      {props.experiences.map((experience) => {
        return (
          <div key={experience.id}>
            <IconButton onClick={() => props.onEditClick(experience.id)}>
              <ModeEditIcon />
            </IconButton>
            <IconButton onClick={() => props.onDeleteExperience(experience.id)}>
              <DeleteIcon />
            </IconButton>
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

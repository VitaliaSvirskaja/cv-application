import { useState } from "react";
import { AddExperienceForm } from "./AddExperienceForm";
import { Showexperiences } from "./ShowExperiences";
import { SectionHeader } from "./SectionHeader";
import { Experience } from "../Experience";

export const Experiences = () => {
  const [experiences, setExperiences] = useState<Array<Experience>>([
    {
      id: "123",
      company: "Siemens",
      startYear: 2010,
      endYear: 2015,
      jobDescription: "Managing Accounts",
      position: "Account Manager",
    },
  ]);

  const [isAddingNewExperience, setIsAddingNewExperience] = useState(false);

  function handleDelete(experienceID: string) {
    const newExperiences: Array<Experience> = experiences.filter(
      (experience) => experience.id !== experienceID
    );
    setExperiences(newExperiences);
  }
  function handleIconClick() {
    setIsAddingNewExperience(!isAddingNewExperience);
  }

  function handleCancelClick() {
    setIsAddingNewExperience(false);
  }

  function handleNewExperience(newExperience: Experience) {
    const finalExperiences = [...experiences, newExperience];
    setExperiences(finalExperiences);
    setIsAddingNewExperience(false);
  }

  return (
    <div className="section-container">
      <SectionHeader onIconClick={handleIconClick} sectionName="Experiences" />
      {isAddingNewExperience && (
        <AddExperienceForm
          onCancelCLick={handleCancelClick}
          onAddNewExperience={handleNewExperience}
        />
      )}
      {
        <Showexperiences
          experiences={experiences}
          onDeleteExperience={handleDelete}
        />
      }
    </div>
  );
};

export default Experiences;

import { useState } from "react";
import { AddExperienceForm } from "./AddExperienceForm";
import { Showexperiences } from "./ShowExperiences";
import { SectionHeader } from "./SectionHeader";
import { Experience } from "../Experience";

export const Experiences = () => {
  const [experiences, setExperiences] = useState<Array<Experience>>([]);

  const [isAddingNewExperience, setIsAddingNewExperience] = useState(false);

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
      <SectionHeader
        onIconClick={handleIconClick}
        buttonName="Add"
        sectionName="Experiences"
      />

      {isAddingNewExperience && (
        <AddExperienceForm
          onCancelCLick={handleCancelClick}
          onAddNewExperience={handleNewExperience}
        />
      )}
      {<Showexperiences experiences={experiences} />}
    </div>
  );
};

export default Experiences;

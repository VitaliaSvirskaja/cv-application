import { useState } from "react";
import { ExperienceForm } from "./ExperienceForm";
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

  const [isExperienceFormVisible, setIsExperienceFormVisible] = useState(false);
  const [experienceToBeEdited, setExperienceToBeEdited] =
    useState<Experience | null>(null);

  function handleDelete(experienceID: string) {
    const newExperiences: Array<Experience> = experiences.filter(
      (experience) => experience.id !== experienceID
    );
    setExperiences(newExperiences);
  }
  function handleNewExperienceClick() {
    setIsExperienceFormVisible(!isExperienceFormVisible);
    setExperienceToBeEdited(null);
  }

  function handleCancelClick() {
    setIsExperienceFormVisible(false);
  }

  function handleNewExperience(newExperience: Experience) {
    const finalExperiences = [...experiences, newExperience];
    setExperiences(finalExperiences);
    setIsExperienceFormVisible(false);
  }

  function handleEditedExperience(editedExperience: Experience) {
    const index = experiences.findIndex(
      (experience) => experience.id === editedExperience.id
    );
    const updatedExperiences = [...experiences];
    updatedExperiences[index] = editedExperience;
    setExperiences(updatedExperiences);
    setIsExperienceFormVisible(false);
  }

  function handleSave(experienceToBeSaved: Experience) {
    if (experienceToBeEdited) {
      handleEditedExperience(experienceToBeSaved);
    } else {
      handleNewExperience(experienceToBeSaved);
    }
  }

  function handleEdit(experienceID: string) {
    setIsExperienceFormVisible(true);
    const foundExperienceToBeEdited: Experience | undefined = experiences.find(
      (experience) => experience.id === experienceID
    );
    if (foundExperienceToBeEdited === undefined) {
      return;
    }
    setExperienceToBeEdited(foundExperienceToBeEdited);
  }

  return (
    <div className="section-container">
      <SectionHeader
        onIconClick={handleNewExperienceClick}
        sectionName="Experiences"
      />
      {isExperienceFormVisible && (
        <ExperienceForm
          onCancelCLick={handleCancelClick}
          experienceToBeEdited={experienceToBeEdited}
          onSave={handleSave}
        />
      )}
      {
        <Showexperiences
          experiences={experiences}
          onDeleteExperience={handleDelete}
          onEditClick={handleEdit}
        />
      }
    </div>
  );
};

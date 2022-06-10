import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { ShowEducation } from "./ShowEducation";
import { AddEducationForm } from "./AddEducationForm";
import { EducationInterface } from "./EducationInterface";
import { Experience } from "../Experience";

export const Educations = () => {
  const [educations, setEducations] = useState<Array<EducationInterface>>([
    {
      id: "1234b",
      degree: "Abi",
      endYear: 2006,
      startYear: 2001,
      schoolName: "PGN",
    },
  ]);
  const [isAddingNewEducation, setIsAddingNewEducation] = useState(false);

  function handleIconClick() {
    setIsAddingNewEducation(!isAddingNewEducation);
  }

  function handleCancelClick() {
    setIsAddingNewEducation(false);
  }

  function handleNewEducation(newEducation: EducationInterface) {
    const finalEducations = [...educations, newEducation];
    setEducations(finalEducations);
    setIsAddingNewEducation(false);
  }

  function handleDelete(educationID: string) {
    const newEducation: Array<EducationInterface> = educations.filter(
      (education) => education.id !== educationID
    );
    setEducations(newEducation);
  }
  return (
    <div className="section-container">
      <SectionHeader onIconClick={handleIconClick} sectionName="Educations" />

      {isAddingNewEducation && (
        <AddEducationForm
          onCancelCLick={handleCancelClick}
          onAddNewEducation={handleNewEducation}
        />
      )}
      {
        <ShowEducation
          educations={educations}
          onDeleteEducation={handleDelete}
        />
      }
    </div>
  );
};

export default Educations;

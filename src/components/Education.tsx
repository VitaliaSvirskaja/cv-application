import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { ShowEducation } from "./ShowEducation";
import { EducationForm } from "./EducationForm";
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
  const [isEducationFormVisible, setIsEducationFormVisible] = useState(false);
  const [educationToBeEdited, setEducationToBeEdited] =
    useState<EducationInterface | null>(null);

  function handleNewEducationClick() {
    setIsEducationFormVisible(!isEducationFormVisible);
    setEducationToBeEdited(null);
  }

  function handleCancelClick() {
    setIsEducationFormVisible(false);
  }

  function handleNewEducation(newEducation: EducationInterface) {
    const finalEducations = [...educations, newEducation];
    setEducations(finalEducations);
    setIsEducationFormVisible(false);
  }

  function handleDelete(educationID: string) {
    const newEducation: Array<EducationInterface> = educations.filter(
      (education) => education.id !== educationID
    );
    setEducations(newEducation);
  }

  function handleEditedEducation(editedEducation: EducationInterface) {
    const index = educations.findIndex(
      (education) => education.id === editedEducation.id
    );
    const updatedEducations = [...educations];
    updatedEducations[index] = editedEducation;
    setEducations(updatedEducations);
    setIsEducationFormVisible(false);
  }

  function handleSave(educationToBeSaved: EducationInterface) {
    if (educationToBeEdited) {
      handleEditedEducation(educationToBeSaved);
    } else {
      handleNewEducation(educationToBeSaved);
    }
  }

  function handleEdit(educationID: string) {
    setIsEducationFormVisible(true);
    const foundEducationToBeEdited: EducationInterface | undefined =
      educations.find((education) => education.id === educationID);
    if (foundEducationToBeEdited === undefined) {
      return;
    }
    setEducationToBeEdited(foundEducationToBeEdited);
  }

  return (
    <div className="section-container">
      <SectionHeader
        onIconClick={handleNewEducationClick}
        sectionName="Educations"
      />

      {isEducationFormVisible && (
        <EducationForm
          onCancelCLick={handleCancelClick}
          educationToBeEdited={educationToBeEdited}
          onSave={handleSave}
        />
      )}
      {
        <ShowEducation
          educations={educations}
          onDeleteEducation={handleDelete}
          onEditClick={handleEdit}
        />
      }
    </div>
  );
};

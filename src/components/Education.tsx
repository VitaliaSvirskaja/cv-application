import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { ShowEducation } from "./ShowEducation";
import { AddEducationForm } from "./AddEducationForm";
import { EducationInterface } from "./EducationInterface";

export const Educations = () => {
  const [educations, setEducations] = useState<Array<EducationInterface>>([]);
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

  return (
    <div className="section-container">
      <SectionHeader
        onIconClick={handleIconClick}
        buttonName="Add"
        sectionName="Educations"
      />

      {isAddingNewEducation && (
        <AddEducationForm
          onCancelCLick={handleCancelClick}
          onAddNewEducation={handleNewEducation}
        />
      )}
      {<ShowEducation educations={educations} />}
    </div>
  );
};

export default Educations;

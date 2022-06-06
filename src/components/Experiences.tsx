import { useState } from "react";
import { Editexperiences } from "./EditExperiences";
import { Showexperiences } from "./ShowExperiences";
import { SectionHeader } from "./SectionHeader";

export const Experiences = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [startYear, setStartYear] = useState<number | "">("");
  const [endYear, setEndYear] = useState<number | "">("");
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [jobTask, setJobTask] = useState("");

  function handleClick() {
    setIsEditing(!isEditing);
  }

  return (
    <div className="section-container">
      <SectionHeader onEditClick={handleClick} sectionName="Experiences" />
      {isEditing ? (
        <Editexperiences
          startYear={startYear}
          endYear={endYear}
          companyName={companyName}
          jobTasks={jobTask}
          position={position}
          onChangeCompanyName={(updatedCompanyName) => {
            setCompanyName(updatedCompanyName);
          }}
          onChangeStartYear={(updatedStartYear) => {
            setStartYear(updatedStartYear);
          }}
          onChangeEndYear={(updatedEndYear) => {
            setEndYear(updatedEndYear);
          }}
          onChangePosition={(updatedPosition) => {
            setPosition(updatedPosition);
          }}
          onChangeJobTask={(updatedJobTask) => {
            setJobTask(updatedJobTask);
          }}
        />
      ) : (
        <Showexperiences
          startYear={startYear}
          endYear={endYear}
          companyName={companyName}
          position={position}
          jobTasks={jobTask}
        />
      )}
    </div>
  );
};

export default Experiences;

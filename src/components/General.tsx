import { GeneralInfo } from "../interfaces/GeneralInfo";
import { useState } from "react";
import { EditPersonalInformation } from "./EditPersonalInformation";
import { ShowPersonalInformation } from "./ShowPersonalInformation";

function General() {
  const [nameInput, setNameInput] = useState("");
  const [mailInput, setMailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState<number | "">("");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  function handleClick() {
    setIsEditing(!isEditing);
  }

  return (
    <div className="personal-information-container">
      <h3>Personal information</h3>
      <button onClick={handleClick}>Edit</button>
      {isEditing ? (
        <EditPersonalInformation
          nameInput={nameInput}
          phoneInput={phoneInput}
          mailInput={mailInput}
          onChangeMailInput={(updatedMailInput) =>
            setMailInput(updatedMailInput)
          }
          onChangePhoneInput={(updatedPhoneInput) =>
            setPhoneInput(updatedPhoneInput)
          }
          onChangeNameInput={(updatedNameInput) =>
            setNameInput(updatedNameInput)
          }
        />
      ) : (
        <ShowPersonalInformation
          nameInput={nameInput}
          phoneInput={phoneInput}
          mailInput={mailInput}
        />
      )}
    </div>
  );
}

export default General;

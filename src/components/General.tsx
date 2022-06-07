import { useState } from "react";
import { EditPersonalInformation } from "./EditPersonalInformation";
import { ShowPersonalInformation } from "./ShowPersonalInformation";
import { SectionHeader } from "./SectionHeader";

function General() {
  const [nameInput, setNameInput] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [mailInput, setMailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState<number | "">("");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  function handleClick() {
    setIsEditing(!isEditing);
  }

  return (
    <div className="section-container">
      <SectionHeader
        sectionName="Personal Information"
        buttonName="Edit"
        onIconClick={handleClick}
      />
      {isEditing ? (
        <EditPersonalInformation
          nameInput={nameInput}
          addressInput={addressInput}
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
          onChangeAddressInput={(updatedAddressInput) => {
            setAddressInput(updatedAddressInput);
          }}
        />
      ) : (
        <ShowPersonalInformation
          nameInput={nameInput}
          addressInput={addressInput}
          phoneInput={phoneInput}
          mailInput={mailInput}
        />
      )}
    </div>
  );
}

export default General;

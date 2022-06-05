import { GeneralInfo } from "../interfaces/GeneralInfo";
import { useState } from "react";

function General() {
  const [generalInformation, setGeneralInformation] = useState({});
  const [nameInput, setNameInput] = useState("");
  const [mailInput, setMailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState();
  const [variant, setVariant] = useState<
    "showPersonalInformation" | "editPersonalInformation"
  >("showPersonalInformation");

  function handleClick() {
    // TODO Ternary function für variant
  }

  return <button onClick={}>Edit</button>;
}

export default General;

function showPersonalInformation() {
  return (
    <div className="personal-information-container">
      <h3>Personal information</h3>
      <div className="general-information">
        <p>Name: {generalInformation.name}</p>
        <p>Mail: {generalInformation.mail}</p>
        <p>Phone: {generalInformation.phone}</p>
      </div>
    </div>
  );
}

function editPersonalInformation() {
  return (
    <form className="input-container">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        value={nameInput}
      />
      <input type="text" name="title" id="title" placeholder="Title" />
      <input type="text" name="address" id="address" placeholder="Address" />
      <input
        type="email"
        name="mail"
        id="mail"
        placeholder="E-Mail"
        value={mailInput}
      />
      <input
        type="tel"
        name="phone"
        id="phone"
        placeholder="Phone number"
        value={phoneInput}
      />
    </form>
  );
}

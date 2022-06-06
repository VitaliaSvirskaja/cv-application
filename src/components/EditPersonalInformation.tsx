import React from "react";

interface Props {
  nameInput: string;
  addressInput: string;
  mailInput: string;
  phoneInput: number | "";
  onChangeMailInput: (updatedMailInput: string) => void;
  onChangePhoneInput: (updatedPhoneInput: number) => void;
  onChangeNameInput: (updatedNameInput: string) => void;
  onChangeAddressInput: (updatedAddressInput: string) => void;
}

export function EditPersonalInformation(props: Props) {
  return (
    <form className="input-container">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        value={props.nameInput}
        onChange={(event) => props.onChangeNameInput(event.target.value)}
      />
      <input
        type="text"
        name="address"
        id="address"
        placeholder="Address"
        value={props.addressInput}
        onChange={(event) => {
          props.onChangeAddressInput(event.target.value);
        }}
      />
      <input
        type="email"
        name="mail"
        id="mail"
        placeholder="E-Mail"
        value={props.mailInput}
        onChange={(event) => props.onChangeMailInput(event.target.value)}
      />
      <input
        type="tel"
        name="phone"
        id="phone"
        placeholder="Phone number"
        value={props.phoneInput}
        onChange={(event) =>
          props.onChangePhoneInput(parseInt(event.target.value))
        }
      />
    </form>
  );
}

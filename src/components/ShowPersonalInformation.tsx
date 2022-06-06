interface Props {
  nameInput: string;
  addressInput: string;
  mailInput: string;
  phoneInput: number | "";
}

export function ShowPersonalInformation(props: Props) {
  return (
    <div>
      <p>Name: {props.nameInput}</p>
      <p>Adress: {props.addressInput}</p>
      <p>Mail: {props.mailInput}</p>
      <p>Phone: {props.phoneInput}</p>
    </div>
  );
}

import "../SectionHeader.css";

interface Props {
  onIconClick: () => void;
  sectionName: string;
  buttonName: string;
}

export function SectionHeader(props: Props) {
  return (
    <div className="section-header">
      <h3>{props.sectionName}</h3>
      <button onClick={props.onIconClick}>{props.buttonName}</button>
    </div>
  );
}

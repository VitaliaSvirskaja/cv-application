import "../SectionHeader.css";

interface Props {
  onEditClick: () => void;
  sectionName: string;
}

export function SectionHeader(props: Props) {
  return (
    <div className="section-header">
      <h3>{props.sectionName}</h3>
      <button onClick={props.onEditClick}>Edit</button>
    </div>
  );
}

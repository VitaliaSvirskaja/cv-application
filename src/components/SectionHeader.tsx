import "../SectionHeader.css";
import { IconButton } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

interface Props {
  onIconClick: () => void;
  sectionName: string;
}

export function SectionHeader(props: Props) {
  return (
    <div className="section-header">
      <h3>{props.sectionName}</h3>
      <IconButton onClick={props.onIconClick}>
        <ModeEditIcon />
      </IconButton>
    </div>
  );
}

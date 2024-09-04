import Typography from "@/components/Typography/Typography";
import {AlignTextProps} from "./types"

const AlignText= ({ attributes, children, element, className }: AlignTextProps) => (
  <Typography variant={element.variant} {...attributes} className={className}>
    {children}
  </Typography>
);

export default AlignText;
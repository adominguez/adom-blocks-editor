import Typography from "@/components/Typography/Typography"
import { DefaultElementProps } from "./types"

const DefaultElement = ({ attributes, children }: DefaultElementProps) => <Typography variant="p" {...attributes}>{children}</Typography>

export default DefaultElement
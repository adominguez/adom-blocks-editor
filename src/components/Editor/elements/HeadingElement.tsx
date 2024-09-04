import Typography from "@/components/Typography/Typography"
import { HeadingElementProps } from "./types"

const HeadingElement = ({ attributes, children, element }: HeadingElementProps) => <Typography variant={element.variant} {...attributes}>{children}</Typography>

export default HeadingElement
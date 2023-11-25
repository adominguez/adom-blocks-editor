import { FC } from "react"
import Typography from "@/components/Typography/Typography"
import { HeadingElementProps } from "@/types/definitions"

const HeadingElement: FC<HeadingElementProps> = ({ attributes, children, element }) => <Typography variant={element.variant} {...attributes}>{children}</Typography>

export default HeadingElement
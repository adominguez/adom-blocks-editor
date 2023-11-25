import { FC } from "react"
import Typography from "@/components/Typography/Typography"
import { DefaultElementProps } from "@/types/definitions"

const DefaultElement: FC<DefaultElementProps> = ({ attributes, children }) => <Typography variant="p" {...attributes}>{children}</Typography>

export default DefaultElement
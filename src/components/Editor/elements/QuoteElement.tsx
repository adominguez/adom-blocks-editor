import { DefaultElementProps } from "./types"

const QuoteElement = ({ attributes, children }: DefaultElementProps) => <blockquote {...attributes} className="px-4 text-lg italic font-semibold">{children}</blockquote>

export default QuoteElement
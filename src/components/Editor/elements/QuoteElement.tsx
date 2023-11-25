/* eslint-disable react/no-unknown-property */
const QuoteElement = ({ attributes, children, element }) => <blockquote variant={element.variant} {...attributes} className="px-4 text-lg italic font-semibold">{children}</blockquote>

export default QuoteElement
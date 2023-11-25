const YoutubeElement = ({ attributes, element, children }) => (
  <span {...attributes}>
    Youtube - {element.youtubeId}
    {children}
  </span>
)

export default YoutubeElement
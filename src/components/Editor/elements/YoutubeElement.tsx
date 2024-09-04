import { YoutubeElementProps } from "./types"

const YoutubeElement = ({ attributes, element, children }: YoutubeElementProps) => (
  <span {...attributes}>
    Youtube - {element.youtubeId}
    {children}
  </span>
)

export default YoutubeElement
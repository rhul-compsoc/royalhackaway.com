import React from "react"
import { EventContext } from "../EventContext"

const EventFullDescription = () => {
  const data = React.useContext(EventContext)

  return <span>{data.mdx.frontmatter.full_description}</span>
}

export { EventFullDescription }

import React from "react"
import { EventContext } from "../EventContext"
import { description as descriptionClass } from "./index.module.scss"

const EventFullDescription = () => {
  const data = React.useContext(EventContext)

  return (
    <span className={descriptionClass}>
      {data.mdx.frontmatter.full_description}
    </span>
  )
}

export { EventFullDescription }

import React from "react"
import { EventContext } from "../EventContext"

const EventDate = ({ start, end }) => {
  const data = React.useContext(EventContext)
  const { event_start, event_end } = data.mdx.frontmatter

  const dateStart = new Date(event_start)
  const dateEnd = new Date(event_end)

  if (start) {
    return <span>{dateStart.toLocaleDateString()}</span>
  } else if (end) {
    return <span>{dateEnd.toLocaleDateString()}</span>
  }
}

export { EventDate }

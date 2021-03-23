import React from "react"
import { Link } from "gatsby"
import Countdown from "react-countdown"

interface Props {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: {
      name: string
      is_public: boolean
      is_over: boolean
      short_name: string
      homepage: string
      event_start: string
      event_end: string
    }
  }
}

const EventInformationCard = ({ node }: Props) => {
  const { frontmatter: event, fields } = node

  const start = new Date(event.event_start)
  const end = new Date(event.event_end)
  const link = event.homepage ? "/" : fields.slug

  return (
    <div className="py-4">
      <h2>{event.name}</h2>
      <p>
        {start.toLocaleDateString()} - {end.toLocaleDateString()}
      </p>
      <Countdown
        date={start}
        overtime={true}
        renderer={({ completed, days }) =>
          completed ? (
            <p>
              {days} day{days !== 1 && "s"} ago
            </p>
          ) : (
            <p>
              In {days} day{days !== 1 && "s"}
            </p>
          )
        }
      />
      <Link to={link} className="btn btn-hackaway-orange text-white px-4">
        {event.short_name}
      </Link>
    </div>
  )
}

export { EventInformationCard }

import React from "react"
import { SiteButton, SiteLink } from "../SiteClickable"
import Countdown from "react-countdown"
import { CombineStyles } from "../../helpers/CombineStyles"

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
      render: boolean
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
      <SiteButton
        to={event.render && link}
        className={CombineStyles(
          "btn btn-hackaway-orange px-4",
          !event.render && "disabled"
        )}
      >
        {event.short_name}
      </SiteButton>
    </div>
  )
}

export { EventInformationCard }

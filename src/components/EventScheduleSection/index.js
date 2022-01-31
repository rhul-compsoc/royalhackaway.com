import React from "react"
import { EventContext } from "../EventContext"
import { Section } from "../Section"

const EventScheduleSection = ({ type }) => {
  const data = React.useContext(EventContext)
  const { schedule } = data.mdx.frontmatter
  return (
    <Section title="Schedule" type={type}>
      <div className="container">
        <div className="row">
          {schedule.map(({ name, events }, scheduleIndex) => (
            <div className="col-sm" key={scheduleIndex}>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="text-center" colSpan="2">
                      {name}
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {events.map(({ activity, time, description }, eventIndex) => (
                    <tr key={`${scheduleIndex},${eventIndex}`}>
                      <td>{time}</td>
                      <td>
                        <strong>{activity}</strong>
                        {description && (
                          <>
                            <br />
                            <span style={{ whiteSpace: "pre-wrap" }}>
                              {description}
                            </span>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export { EventScheduleSection }

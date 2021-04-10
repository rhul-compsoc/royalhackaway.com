import React from "react"
import { Section } from "../Section"
import { scheduleSection } from "./index.module.scss"

const EventScheduleSection = ({ schedule }) => (
  <Section title="Schedule" className={scheduleSection}>
    <div className="container">
      <div className="row">
        {schedule.map(({ name, events }, scheduleIndex) => (
          <div className="col-sm" key={scheduleIndex}>
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th className="text-center" colSpan="2">
                    {name}
                  </th>
                </tr>
              </thead>

              <tbody>
                {events.map(({ activity, time }, eventIndex) => (
                  <tr key={`${scheduleIndex},${eventIndex}`}>
                    <td>{time}</td>
                    <td>{activity}</td>
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

export { EventScheduleSection }

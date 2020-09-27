import React, { Component } from "react"

class EventSchedule extends Component {
  render() {
    const schedule = this.props.schedule

    return (
      <section>
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
      </section>
    )
  }
}

export { EventSchedule }

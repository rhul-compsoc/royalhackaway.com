import React, { Component } from "react"
import styles from "./index.module.scss"
import { CombineStyles } from "../../helpers/CombineStyles"

class HackathonDefinition extends Component {
  render() {
    return (
      <section className={CombineStyles(styles.hackathonDef)}>
        <div className="row justify-content-center py-5">
          <div className="text-center">
            <h1>We make hackathons happen.</h1>
          </div>
        </div>
        <div className="row justify-content-center py-5">
          <div className="col-4 text-right">
            <h4>
              Royal Hacakway is an initiative of the{" "}
              <a href="https://cmpsc.uk">
                Computing Society at Royal Holloway, Univertiy of London
              </a>
            </h4>
            <h4>
              We aim to create great experiences for students of every
              background of study by hosting inclusive events where people can
              learn and grow.
            </h4>
          </div>
          <div className="col-4">
            <h1>hackathon</h1>
            <h5 className="font-weight-light">
              <i>/ˈhækəθɒn/</i>
            </h5>
            <h4 className="font-weight-light">
              <i>
                an event, typically lasting several days, in which a large
                number of people meet to engage in collaborative computer
                programming.
              </i>
            </h4>
          </div>
        </div>
      </section>
    )
  }
}

export { HackathonDefinition }

import React, { Component } from "react"
import { CombineStyles } from "../../helpers/CombineStyles"
import styles from "./index.module.scss"

class HackathonDefinition extends Component {
  render() {
    return (
      <section className={styles.hackathonDef}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <h2 className={CombineStyles("text-center fw-bold display-5", styles.header)}>
                We make hackathons happen.
              </h2>
            </div>
            <div className="col-12 col-md-6 text-center text-md-end">
              <p className="fw-bold fs-4">
                Royal Hackaway is an initiative of the{" "}
                <a href="https://cmpsc.uk" className="text-decoration-none">
                  Computing Society at Royal Holloway, University of London
                </a>
                <br />
                <br />
                We aim to create great experiences for students of every
                background of study by hosting inclusive events where people can
                learn and grow.
              </p>
            </div>
            <div className="col-12 col-md-6 text-center text-md-start">
              <p className="fw-bold fs-1">hackathon</p>
              <p className="fw-light fs-5">
                <i>/ˈhækəθɒn/</i>
              </p>
              <p className="fw-light fs-4">
                <i>
                  an event, typically lasting several days, in which a large
                  number of people meet to engage in collaborative computer
                  programming.
                </i>
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export { HackathonDefinition }

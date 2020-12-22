import { Link } from "gatsby"
import React, { Component } from "react"
import Countdown from "react-countdown"
import { FaCalendarAlt, FaDiscord, FaMapMarkerAlt } from "react-icons/fa"
import { CombineStyles } from "../../helpers/CombineStyles"
import { ButtonsContainer } from "../ButtonsContainer"
import styles from "./index.module.scss"

class HackathonCountdown extends Component {
  render() {
    const { start } = this.props.frontmatter

    return (
      <section className={styles.hackathonCountdown}>
        <Countdown
          renderer={({ days, hours, minutes, seconds }) => (
            <div className="row justify-content-center py-2">
              <div className="col-3 text-center">
                <span className={styles.digit}>{days}</span>
                <span className={styles.label}>day{days !== 1 && "s"}</span>
              </div>
              <div className="col-3 text-center">
                <span className={styles.digit}>{hours}</span>
                <span className={styles.label}>hour{hours !== 1 && "s"}</span>
              </div>
              <div className="col-3 text-center">
                <span className={styles.digit}>{minutes}</span>
                <span className={styles.label}>
                  minute{minutes !== 1 && "s"}
                </span>
              </div>
              <div className="col-3 text-center">
                <span className={styles.digit}>{seconds}</span>
                <span className={styles.label}>
                  second{seconds !== 1 && "s"}
                </span>
              </div>
            </div>
          )}
          date={start}
        />
      </section>
    )
  }
}

export { HackathonCountdown }

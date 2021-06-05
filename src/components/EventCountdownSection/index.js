import React from "react"
import Countdown from "react-countdown"
import { EventContext } from "../EventContext"
import { Section } from "../Section"
import * as styles from "./index.module.scss"

const EventCountdownSection = ({ type }) => {
  const data = React.useContext(EventContext)

  return (
    <Section className={styles.hackathonCountdown} type={type}>
      <div className="container">
        <Countdown
          renderer={({ days, hours, minutes, seconds }) => (
            <div className="row justify-content-center py-2">
              <div className={styles.segments}>
                <div className={styles.segment}>
                  <span className={styles.digit}>{days}</span>
                  <span className={styles.label}>day{days !== 1 && "s"}</span>
                </div>
                <div className={styles.segment}>
                  <span className={styles.digit}>{hours}</span>
                  <span className={styles.label}>hour{hours !== 1 && "s"}</span>
                </div>
                <div className={styles.segment}>
                  <span className={styles.digit}>{minutes}</span>
                  <span className={styles.label}>
                    minute{minutes !== 1 && "s"}
                  </span>
                </div>
                <div className={styles.segment}>
                  <span className={styles.digit}>{seconds}</span>
                  <span className={styles.label}>
                    second{seconds !== 1 && "s"}
                  </span>
                </div>
              </div>
            </div>
          )}
          date={data.mdx.frontmatter.event_start}
        />
      </div>
    </Section>
  )
}

export { EventCountdownSection }

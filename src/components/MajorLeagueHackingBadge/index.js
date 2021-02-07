import React from "react"
import styles from "./index.module.scss"

const MajorLeagueHackingBadge = ({ year }) => (
  <a
    id="mlh-trust-badge"
    className={styles.badge}
    href={`https://mlh.io/seasons/eu-${year}/events?utm_source=eu-hackathon&amp;utm_medium=TrustBadge&amp;utm_campaign=${year}-season&amp;utm_content=white`}
    target="_blank"
    rel="noreferrer"
  >
    <img
      src={`https://s3.amazonaws.com/logged-assets/trust-badge/${year}/mlh-trust-badge-${year}-gray.svg`}
      alt={`Major League Hacking ${year} Hackathon Season`}
    />
  </a>
)

export { MajorLeagueHackingBadge }

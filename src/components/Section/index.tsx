import React, { ReactNode } from "react"
import styles from "./index.module.scss"

const Section = ({ children }: { children: ReactNode }): ReactNode => (
  <div className={styles.section}>{children}</div>
)

export { Section }

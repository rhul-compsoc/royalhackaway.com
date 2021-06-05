import React, { ReactNode } from "react"
import * as styles from "./index.module.scss"

const ButtonsContainer = ({ children }: { children: ReactNode }): ReactNode => (
  <div className={styles.buttons}>{children}</div>
)

export { ButtonsContainer }

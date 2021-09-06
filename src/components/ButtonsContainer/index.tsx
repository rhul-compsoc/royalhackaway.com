import React, { ReactNode } from "react"
import { CombineStyles } from "../../helpers/CombineStyles"
import * as styles from "./index.module.scss"

const ButtonsContainer = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}): ReactNode => (
  <div className={CombineStyles(styles.buttons, className)}>{children}</div>
)

export { ButtonsContainer }

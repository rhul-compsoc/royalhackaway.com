import React, { ReactNode } from "react"
import { CombineStyles } from "../../helpers/CombineStyles"
import { header, section, titleContainer } from "./index.module.scss"
import * as styles from "./index.module.scss"

enum SectionTypes {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
  LOCALHOST = "localhost",
}

const Section = ({
  children,
  title,
  subtitle,
  className,
  type = SectionTypes.PRIMARY,
}: {
  children: ReactNode
  title?: string
  subtitle?: string
  className?: string
  type?: SectionTypes
}): ReactNode => (
  <section className={CombineStyles(section, className, styles[type])}>
    {title && (
      <div className={CombineStyles("container", titleContainer)}>
        <div className="row">
          <div className="col-12 text-center">
            <h2 className={header}>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
          </div>
        </div>
      </div>
    )}
    {children}
  </section>
)

export { Section, SectionTypes }

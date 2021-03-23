import React, { ReactNode } from "react"
import { CombineStyles } from "../../helpers/CombineStyles"
import { header, section, titleContainer } from "./index.module.scss"

const Section = ({
  children,
  title,
  subtitle,
  className,
}: {
  children: ReactNode
  title?: string
  subtitle?: string
  className?: string
}): ReactNode => (
  <div className={CombineStyles(section, className)}>
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
  </div>
)

export { Section }

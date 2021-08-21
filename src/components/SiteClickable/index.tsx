import { Link } from "gatsby"
import React, { ReactElement } from "react"

enum SiteClickableTypes {
  LINK,
  BUTTON,
}

interface Props {
  children: any
  type?: SiteClickableTypes
  className?: string
  [key: string]: any
}

interface LocalProps extends Props {
  to: string
  href?: never
  onClick?: never
  target?: never
}

interface ExternalProps extends Props {
  to?: never
  href: string
  onClick?: never
  target?: string
}

interface OnClickProps extends Props {
  to?: never
  href?: never
  onClick: () => any
  target?: never
}

type AcceptableProps = LocalProps | ExternalProps | OnClickProps

const SiteClickable = ({
  to,
  file,
  href,
  onClick,
  children,
  target,
  type,
  className,
  ...props
}: AcceptableProps): ReactElement => {
  let role = ""

  switch (type) {
    case SiteClickableTypes.BUTTON:
      className += " btn"
      role = "button"
      break
    case SiteClickableTypes.LINK:
      className += " link"
      role = "link"
      break
  }

  if (file) href = file.publicURL

  if (href) {
    return (
      <a
        {...props}
        href={href}
        target={target}
        role={role}
        className={className}
      >
        {children}
      </a>
    )
  }

  if (to) {
    return (
      <Link {...props} to={to} role={role} className={className}>
        {children}
      </Link>
    )
  }

  switch (type) {
    case SiteClickableTypes.BUTTON:
      return (
        <button
          {...props}
          onClick={onClick}
          onKeyDown={onClick}
          className={className}
          role={role}
          tabIndex={0}
        >
          {children}
        </button>
      )
    case SiteClickableTypes.LINK:
      return (
        <span
          {...props}
          onClick={onClick}
          onKeyDown={onClick}
          className={className}
          role={role}
          tabIndex={0}
        >
          {children}
        </span>
      )
  }
}

const SiteLink = (props: AcceptableProps) => (
  <SiteClickable type={SiteClickableTypes.LINK} {...props} />
)
const SiteButton = (props: AcceptableProps) => (
  <SiteClickable type={SiteClickableTypes.BUTTON} {...props} />
)

export { SiteLink, SiteButton }

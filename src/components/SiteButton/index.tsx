import { Link } from "gatsby"
import React from "react"
import { CombineStyles } from "../../../src/helpers/CombineStyles"

const SiteButton = ({
  to,
  href,
  onClick,
  className = "",
  children,
  disabled = false,
}) => {
  let uses = 0

  if (to) uses++
  if (href) uses++
  if (onClick) uses++

  const newClassName = CombineStyles(
    "btn",
    "px-4",
    className,
    disabled && "disabled"
  )

  if (uses > 1)
    throw new Error(
      "You cannot assign multiple functionalities to the same SiteButton"
    )

  if (to) {
    return (
      <Link to={to} className={newClassName}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={newClassName}>
        {children}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      onKeyDown={onClick}
      className={newClassName}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export { SiteButton }

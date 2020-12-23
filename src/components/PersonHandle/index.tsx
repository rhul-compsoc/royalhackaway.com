import React from "react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { FiMail } from "react-icons/fi"

enum PersonService {
  TWITTER = "twitter",
}

const HandleData = {
  twitter: {
    prefix: "https://twitter.com/",
    Icon: FaTwitter,
  },
  email: {
    prefix: "mailto:",
    Icon: FiMail,
  },
  github: {
    prefix: "https://github.com/",
    Icon: FaGithub,
  },
  linkedin: {
    prefix: "https://www.linkedin.com/in/",
    Icon: FaLinkedin,
  },
}

const PersonHandle = ({
  service,
  handle,
}: {
  service: PersonService
  handle: string
}): JSX.Element => {
  const { prefix, Icon } = HandleData[service]
  return (
    <a href={prefix + handle}>
      <Icon />
    </a>
  )
}

export { PersonHandle }

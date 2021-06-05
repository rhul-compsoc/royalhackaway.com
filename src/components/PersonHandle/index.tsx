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
    title: "Twitter",
  },
  email: {
    prefix: "mailto:",
    Icon: FiMail,
    title: "E-Mail",
  },
  github: {
    prefix: "https://github.com/",
    Icon: FaGithub,
    title: "GitHub",
  },
  linkedin: {
    prefix: "https://www.linkedin.com/in/",
    Icon: FaLinkedin,
    title: "LinkedIn",
  },
}

const PersonHandle = ({
  service,
  handle,
}: {
  service: PersonService
  handle: string
}): JSX.Element => {
  const { prefix, Icon, title } = HandleData[service]
  return (
    <a href={prefix + handle} title={`${title} - ${handle}`}>
      <Icon />
    </a>
  )
}

export { PersonHandle }

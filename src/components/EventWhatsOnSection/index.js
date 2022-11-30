import React from "react"
import { CombineStyles } from "../../helpers/CombineStyles"
import { EventContext } from "../EventContext"
import { Section } from "../Section"
import { SiteImage } from "../SiteImage"
import * as styles from "./index.module.scss"

const EventWhatsOnSection = ({ type }) => {
  const data = React.useContext(EventContext)
  const { name, people } = data.mdx.frontmatter

  return (
    <Section
      title="What's On?"
      subtitle={`These are some of the events you can expect to see at ${name}!`}
      type={type}
    >
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-xl-8">
            <div className="row justify-content-center">
              {people.map(({ person, role }) => (
                <div
                  className={CombineStyles(
                    "col-6 col-sm-4 col-md-3",
                    styles.card
                  )}
                  key={person.frontmatter.name}
                >
                  <div
                    className={styles.pictureContainer}
                    style={{
                      background: `url(${person.frontmatter.image.light.publicURL})`,
                      width: "100%",
                      height: "1wv",
                    }}
                  >
                    <div className={styles.overlayText}>
                      <span>{person.frontmatter.name}</span>
                      <br />
                      <span className={styles.description}>{role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export { EventWhatsOnSection }

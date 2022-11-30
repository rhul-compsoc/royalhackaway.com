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
                  className={CombineStyles("col-6 col-sm-4 col-md-3")}
                  key={person.frontmatter.name}
                >
                  <div
                    style={{
                      background: `url(${person.frontmatter.image.light.publicURL})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      height: "150px",
                      width: "150px",
                    }}
                  >
                    <div
                      className={styles.overlayText}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        color: "#000",
                      }}
                    >
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

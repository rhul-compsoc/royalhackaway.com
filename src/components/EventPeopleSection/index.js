import React from "react"
import { CombineStyles } from "../../helpers/CombineStyles"
import { EventContext } from "../EventContext"
import { PersonHandle } from "../PersonHandle"
import { Section } from "../Section"
import { SiteImage } from "../SiteImage"
import * as styles from "./index.module.scss"

const EventPeopleSection = ({ type }) => {
  const data = React.useContext(EventContext)
  const { name, people } = data.mdx.frontmatter

  return (
    <Section
      title="The Team"
      subtitle={`These are the people that make ${name} possible!`}
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
                  <div className={styles.pictureContainer}>
                    <SiteImage
                      aspectRatio={1}
                      image={person.frontmatter.image}
                      className={styles.picture}
                      title={person.frontmatter.description}
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <div className="text-center">
                      <span className={styles.name}>
                        {person.frontmatter.name}
                      </span>
                      <br />
                      <span className={styles.description}>{role}</span>
                      <div className={styles.handles}>
                        {person.frontmatter.handles.map(handle => (
                          <PersonHandle
                            key={handle.handle}
                            handle={handle.handle}
                            service={handle.service}
                          />
                        ))}
                      </div>
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

export { EventPeopleSection }

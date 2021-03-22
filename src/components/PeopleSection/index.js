import React from "react"
import * as styles from "./index.module.scss"
import Img from "gatsby-image"
import { PersonHandle } from "../PersonHandle"
import { CombineStyles } from "../../helpers/CombineStyles"
import { Section } from "../Section"

const PeopleSection = ({ event_name, people }) => (
  <Section
    className={styles.people}
    title="The Team"
    subtitle={`These are the people that make ${event_name} possible!`}
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
                  <Img
                    fluid={{
                      ...person.frontmatter.image.childImageSharp.fluid,
                      aspectRatio: 1,
                    }}
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
                    <span
                      className={CombineStyles(
                        styles.description,
                        "text-muted"
                      )}
                    >
                      {role}
                    </span>
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

export { PeopleSection }

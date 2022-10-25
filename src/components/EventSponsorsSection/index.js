import React, { Component } from "react"
import { CombineStyles } from "../../helpers/CombineStyles"
import { EventContext } from "../EventContext"
import { Section } from "../Section"
import { SiteImage } from "../SiteImage"
import * as styles from "./index.module.scss"

const tierSizes = [undefined, 8, 6, 5, 3, 2.5]

const EventSponsorsSection = ({ type, children, link }) => {
  const data = React.useContext(EventContext)

  const {
    sponsors,
    sponsor_document = null,
    sponsor_document_enable = false,
  } = data.mdx.frontmatter

  return (
    <Section title="Sponsors" type={type}>
      <div className="container">
        {children}
        <div className="row">
          <div className="col-12">
            {sponsors.map(tier => (
              <div key={tier.name} className={styles.tier}>
                <h2 className="text-center" style={{ color: tier.colour }}>
                  <b>{tier.name}</b>
                </h2>
                <div className={styles.sponsorTier}>
                  {tier.companies.map(({ frontmatter: company }) => {
                    return (
                      <a
                        key={company.name}
                        href={company.link}
                        className={styles.sponsor}
                      >
                        <SiteImage
                          className={styles.sponsorLogo}
                          fixedHeight={tierSizes[tier.tier]}
                          image={company.image}
                          key={company.link}
                          alt={company.name}
                          title={company.name}
                          objectFit="contain"
                          layout="fixed"
                        />
                      </a>
                    )
                  })}
                </div>
              </div>
            ))}
            {!sponsor_document_enable && sponsors.length === 0 && (
              <div
                className={CombineStyles(
                  "text-center",
                  styles.sponsorButtonContainer
                )}
              >
                <span className="btn btn-hackaway-orange disabled">
                  Sponsor document coming soon...
                </span>
              </div>
            )}
            {sponsor_document_enable && (
              <div
                className={CombineStyles(
                  "text-center",
                  styles.sponsorButtonContainer
                )}
              >
                <a
                  href={link || sponsor_document?.publicURL}
                  className="btn btn-hackaway-orange "
                >
                  Become a sponsor
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}

export { EventSponsorsSection }

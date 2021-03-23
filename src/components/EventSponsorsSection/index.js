import React, { Component } from "react"
import { CombineStyles } from "../../helpers/CombineStyles"
import { Section } from "../Section"
import * as styles from "./index.module.scss"

class EventSponsorsSection extends Component {
  render() {
    const {
      sponsors,
      sponsor_document = null,
      sponsor_document_enable = false,
    } = this.props

    return (
      <Section className={styles.sponsorSection} title="Sponsors">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {sponsors.map(tier => (
                <div key={tier.name} className={styles.tier}>
                  <h2 className="text-center" style={{ color: tier.colour }}>
                    <b>{tier.name}</b>
                  </h2>
                  <div className={styles.sponsorTier}>
                    {tier.companies.map(({ frontmatter: company }) => (
                      <a
                        key={company.name}
                        href={company.link}
                        className={styles.sponsor}
                      >
                        {/* TODO: Use Gatsby Image Sharp to lazy-load PNG files */}
                        <img
                          className={CombineStyles(
                            styles.sponsorLogo,
                            styles["tier" + tier.tier]
                          )}
                          style={company.style}
                          src={company.image?.publicURL}
                          key={company.image}
                          alt={company.name}
                          title={company.name}
                        />
                      </a>
                    ))}
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
                  <span className="btn btn-hackaway-orange text-white disabled">
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
                    href={sponsor_document?.publicURL}
                    className="btn btn-hackaway-orange text-white"
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
}

export { EventSponsorsSection }

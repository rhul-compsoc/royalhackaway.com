import React, { Component } from "react"
import { CombineStyles } from "../../helpers/CombineStyles"
import styles from "./index.module.scss"
// import sponsorHandout from "../../assets/pdf/sponsorhandout.pdf"

// query MyQuery {
//   allMarkdownRemark {
//     nodes {
//       frontmatter {
//         show_sponsors_list
//         sponsors {
//           colour
//           name
//           tier
//           tier_sponsors {
//             colour
//             image
//             link
//             name
//             shadow_colour
//           }
//         }
//       }
//     }
//   }
// }

class EventSponsors extends Component {
  render() {
    const {
      sponsors: sponsorTiers,
      sponsor_document = null,
      show_sponsor_button = false,
    } = this.props

    return (
      <section className={styles.sponsorSection}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center display-5 fw-bold">Sponsors</h2>
              {sponsorTiers.map(tier => (
                <div key={tier.name} className={styles.tier}>
                  <h2 className="text-center" style={{ color: tier.colour }}>
                    <b>{tier.name}</b>
                  </h2>
                  <div
                    className={CombineStyles(
                      "row",
                      "justify-content-center",
                      styles.sponsorTier
                    )}
                  >
                    {tier.tier_sponsors.map(tierSponsor => (
                      <a
                        key={tierSponsor.name}
                        href={tierSponsor.link}
                        className={CombineStyles(
                          "justify-content-center",
                          "rounded",
                          styles.sponsor
                        )}
                      >
                        <img
                          className={CombineStyles(
                            styles.sponsorLogo,
                            styles["tier" + tier.tier]
                          )}
                          style={tierSponsor.style}
                          src={tierSponsor.image?.publicURL}
                          key={tierSponsor.image}
                          alt={tierSponsor.name}
                          title={tierSponsor.name}
                        />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              {show_sponsor_button && (
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
      </section>
    )
  }
}

export { EventSponsors }

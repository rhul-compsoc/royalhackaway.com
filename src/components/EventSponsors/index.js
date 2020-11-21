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
      <section>
        <div className="row">
          <div className="col-12 py-4">
            <h2 className="text-center display-4">Sponsors</h2>
            {sponsorTiers.map(tier => (
              <div key={tier.name}>
                <h2 className="text-center" style={{ color: tier.colour }}>
                  <b>{tier.name}</b>
                </h2>
                <div
                  className={CombineStyles(
                    "row",
                    "justify-content-center",
                    styles.sponsorTier,
                  )}
                >
                  {tier.tier_sponsors.map(tierSponsor => (
                    <a
                      key={tierSponsor.name}
                      href={tierSponsor.link}
                      className={CombineStyles(
                        "align-middle",
                        // "col-md-2",
                        // "row",
                        "rounded",
                        styles.sponsor
                      )}
                      style={
                        {
                          // backgroundColor: tierSponsor.colour,
                          // boxShadow: "4px 5px " + tierSponsor.shadow_colour,
                        }
                      }
                    >
                      <img
                        className={CombineStyles(
                          styles.sponsorLogo,
                          styles["tier" + tier.tier]
                        )}
                        src={tierSponsor.image.publicURL}
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
      </section>
    )
  }
}

export { EventSponsors }

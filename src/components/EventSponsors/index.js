import React, { Component } from "react"
import { CombineStyles } from "../../helpers/CombineStyles"
import styles from "./index.module.scss"
import sponsorHandout from "../../assets/pdf/sponsorhandout.pdf"

// query MyQuery {
//   allMarkdownRemark {
//     nodes {
//       frontmatter {
//         show_sponsors_list
//         sponsors {
//           colour
//           name
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
    const { markdownRemark } = this.props.data
    const { frontmatter } = markdownRemark

    const { sponsors: sponsorTiers } = frontmatter

    return (
      <section>
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
                styles.sponsorTier
              )}
            >
              {tier.tier_sponsors.map(tierSponsor => (
                <a
                  key={tierSponsor.name}
                  href={tierSponsor.link}
                  className={CombineStyles(
                    "align-middle",
                    "col-md-2",
                    "row",
                    "rounded",
                    styles.sponsor
                  )}
                  style={{
                    backgroundColor: tierSponsor.colour,
                    boxShadow: "4px 5px " + tierSponsor.shadow_colour,
                  }}
                >
                  <img
                    className={CombineStyles("col-12", styles.sponsorLogo)}
                    src={tierSponsor.image.publicURL}
                    alt={tierSponsor.name}
                    title={tierSponsor.name}
                  />
                </a>
              ))}
            </div>
          </div>
        ))}
        <div
          className={CombineStyles(
            "text-center",
            styles.sponsorButtonContainer
          )}
        >
          <a href={sponsorHandout} className="btn btn-hackaway-white btn-lg">
            Become a sponsor
          </a>
        </div>
      </section>
    )
  }
}

export { EventSponsors }

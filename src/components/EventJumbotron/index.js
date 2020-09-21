import React, { Component } from "react"
import styles from "./index.module.scss"
import Img from "gatsby-image"
import { CombineStyles } from "../../helpers/CombineStyles"

class EventJumbotron extends Component {
  render() {
    const { markdownRemark } = this.props.data
    const { frontmatter } = markdownRemark

    const {
      display_logo,
      logo_width,
      name,
      start,
      location: eventLocation,
      short_description,
      show_ticket_button,
      ticket_button_text,
      tickets,
    } = frontmatter
    const jumbotronImageFluid =
      frontmatter?.jumbotron_image?.childImageSharp?.fluid
    const smallLogo = frontmatter?.small_logo?.publicURL
    const formattedDate = new Date(start).toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "long",
    })

    return (
      <section className={CombineStyles(styles.eventJumbotron)}>
        <div className={styles.eventJumbotronContent}>
          {display_logo && (
            <div className="row justify-content-center text-center">
              <div
                className={CombineStyles(
                  `col-md-${logo_width || 2}`,
                  "col-md-8"
                )}
              >
                <img
                  className={styles.eventLogo}
                  src={smallLogo}
                  alt={`Logo for ${name}`}
                />
              </div>
            </div>
          )}

          <div className="row justify-content-center text-center">
            <div className="col-md-6 text-light col-xs-12">
              <h1>{name}</h1>
              <p>
                {formattedDate}
                <br />
                {eventLocation}
              </p>
              <p>{short_description}</p>

              {show_ticket_button && (
                <a className="btn btn-hackaway" href={tickets}>
                  {ticket_button_text}
                </a>
              )}
            </div>
          </div>
        </div>

        {jumbotronImageFluid ? (
          <Img
            fluid={jumbotronImageFluid}
            className={styles.eventJumbotronBackground}
            alt="Background image of people attending a hackathon."
          />
        ) : (
          <div className={styles.eventJumbotronImagelessBackground} />
        )}
      </section>
    )
  }
}

export { EventJumbotron }

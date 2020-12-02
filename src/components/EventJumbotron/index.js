import React, { Component } from "react"
import styles from "./index.module.scss"
import Img from "gatsby-image"
import { CombineStyles } from "../../helpers/CombineStyles"
import { ButtonsContainer } from "../ButtonsContainer"

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
      enable_ticket_button,
      ticket_button_text,
      tickets,
      enable_livestream_button,
      livestream_youtube,
      enable_chat_link,
      chat_link,
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
                <strong>{formattedDate}</strong>
                <br />
                {eventLocation}
              </p>
              <p>{short_description}</p>

              <ButtonsContainer>
                {enable_ticket_button ? (
                  <a className="btn btn-hackaway-white px-4" href={tickets}>
                    {ticket_button_text}
                  </a>
                ) : (
                  <span className="btn btn-hackaway-white px-4 disabled">
                    Tickets coming soon™
                  </span>
                )}
                {enable_livestream_button ? (
                  <a
                    className="btn btn-hackaway-white px-4"
                    href={`https://www.youtube.com/watch?v=${livestream_youtube}`}
                  >
                    Watch Live
                  </a>
                ) : (
                  <span className="btn btn-hackaway-white px-4 disabled">
                    Watch Live
                  </span>
                )}
                {enable_chat_link ? (
                  <a className="btn btn-hackaway-white px-4" href={chat_link}>
                    Join the Discord
                  </a>
                ) : (
                  <span className="btn btn-hackaway-white px-4 disabled">
                    Join the Discord
                  </span>
                )}
              </ButtonsContainer>
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

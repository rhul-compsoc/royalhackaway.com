import React, { Component } from "react"
import {
  FaCalendarAlt,
  FaDiscord,
  FaMapMarkerAlt,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa"
import { ButtonsContainer } from "../ButtonsContainer"
import { SiteImage } from "../SiteImage"
import * as styles from "./index.module.scss"

class EventJumbotron extends Component {
  render() {
    const {
      ticket_button_enable,
      sponsor_document_enable,
      livestream_embed_enable,
      sponsor_document,
      livestream_type,
      livestream_link,
      short_name,
      full_description,
      ticket_button_label,
      display_date,
      ticket_button_link,
      location,
      chat_link_enable,
      chat_link,
      livestream_button_enable,
      subtitle,
      event_widescreen_logo,
      jumbotron_enable_title,
      jumbotron_enable_widescreen_logo,
    } = this.props.frontmatter

    let livestreamSection

    if (!livestream_embed_enable) {
      livestreamSection = (
        <>
          <p>
            <FaMapMarkerAlt /> {location} <br />
            <FaCalendarAlt /> {display_date}
          </p>
          <p className={styles.description}>{full_description}</p>
        </>
      )
    } else if (livestream_type === "youtube") {
      livestreamSection = (
        <div className={styles.livestreamContainer}>
          <iframe
            className={styles.livestream}
            src={`https://www.youtube.com/embed/${livestream_link}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )
    } else if (livestream_type === "twitch") {
      livestreamSection = (
        <div className={styles.livestreamContainer}>
          <iframe
            className={styles.livestream}
            src={`https://player.twitch.tv/?channel=${livestream_link}&parent=${encodeURIComponent(
              typeof window !== "undefined"
                ? window.location.hostname
                : "royalhackaway.com"
            )}`}
            allowFullScreen
          ></iframe>
        </div>
      )
    }

    return (
      <section className={styles.hackathonTitle}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-7">
              {jumbotron_enable_widescreen_logo && (
                <SiteImage image={event_widescreen_logo} />
              )}
              {jumbotron_enable_title && (
                <h1 className={styles.name}>{short_name}</h1>
              )}
              <h3>{subtitle}</h3>
              {livestreamSection}
              <ButtonsContainer>
                {ticket_button_enable ? (
                  <a
                    className="btn btn-hackaway-primary px-4"
                    href={ticket_button_link}
                  >
                    {ticket_button_label}
                  </a>
                ) : (
                  <span className="btn btn-hackaway-primary px-4 disabled">
                    {ticket_button_label}
                  </span>
                )}
                {sponsor_document_enable && (
                  <a
                    className="btn btn-hackaway-primary px-4"
                    href={sponsor_document?.publicURL}
                  >
                    Sponsor Us
                  </a>
                )}
                {livestream_button_enable && livestream_type === "youtube" && (
                  <a
                    className="btn btn-hackaway-youtube px-4"
                    href={`https://www.youtube.com/watch?v=${livestream_link}`}
                  >
                    <FaYoutube /> YouTube
                  </a>
                )}
                {livestream_button_enable && livestream_type === "twitch" && (
                  <a
                    className="btn btn-hackaway-twitch px-4"
                    href={`https://twitch.tv/${livestream_link}`}
                  >
                    <FaTwitch /> Twitch.tv
                  </a>
                )}
                {chat_link_enable && (
                  <a className="btn btn-hackaway-blurple px-4" href={chat_link}>
                    <FaDiscord /> Join Discord
                  </a>
                )}
              </ButtonsContainer>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export { EventJumbotron }

import React, { Component } from "react"
import {
  FaCalendarAlt,
  FaDiscord,
  FaMapMarkerAlt,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa"
import { ButtonsContainer } from "../ButtonsContainer"
import styles from "./index.module.scss"

class HackathonTitle extends Component {
  render() {
    const {
      enable_ticket_button = true,
      show_sponsor_button,
      show_livestream_embed,
      sponsor_document,
      livestream_type,
      livestream_link,
      short_name,
      full_description,
      ticket_button_text,
      display_date,
      tickets,
      location,
      enable_chat_link,
      chat_link,
      enable_livestream_button,
    } = this.props.frontmatter

    let livestreamSection

    if (!show_livestream_embed) {
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
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-6">
              <h1 className={styles.name}>{short_name}</h1>
              <h3>Create something awesome</h3>
              {livestreamSection}
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
                {show_sponsor_button && (
                  <a
                    className="btn btn-hackaway-white px-4"
                    href={sponsor_document?.publicURL}
                  >
                    Sponsor Us
                  </a>
                )}
                {enable_livestream_button && livestream_type === "youtube" && (
                  <a
                    className="btn btn-hackaway-youtube text-white px-4"
                    href={`https://www.youtube.com/watch?v=${livestream_link}`}
                  >
                    <FaYoutube /> YouTube
                  </a>
                )}
                {enable_livestream_button && livestream_type === "twitch" && (
                  <a
                    className="btn btn-hackaway-twitch text-white px-4"
                    href={`https://twitch.tv/${livestream_link}`}
                  >
                    <FaTwitch /> Twitch.tv
                  </a>
                )}
                {enable_chat_link && (
                  <a
                    className="btn btn-hackaway-blurple text-white px-4"
                    href={chat_link}
                  >
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

export { HackathonTitle }

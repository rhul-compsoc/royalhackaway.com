import React, { Component } from "react"
import { FaCalendarAlt, FaDiscord, FaMapMarkerAlt } from "react-icons/fa"
import { ButtonsContainer } from "../ButtonsContainer"
import styles from "./index.module.scss"

class HackathonTitle extends Component {
  render() {
    const {
      enable_ticket_button = true,
      show_sponsor_button,
      show_livestream_embed,
      sponsor_document,
      livestream_youtube,
      short_name,
      full_description,
      ticket_button_text,
      display_date,
      tickets,
      location,
      enable_chat_link,
      chat_link,
    } = this.props.frontmatter

    return (
      <section className={styles.hackathonTitle}>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-m-6 col-xl-5">
            <h1 className={styles.name}>{short_name}</h1>
            <h3>Create something awesome</h3>
          </div>
        </div>
        {show_livestream_embed ? (
          <div className="row justify-content-center py-2">
            <div className="col-12 col-sm-8 col-m-6 col-xl-5">
              <div className={styles.livestreamContainer}>
                <iframe
                  className={styles.livestream}
                  src={`https://www.youtube.com/embed/${livestream_youtube}?autoplay=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="row justify-content-center py-2">
              <div className="col-12 col-sm-8 col-m-6 col-xl-5">
                <p>
                  <FaMapMarkerAlt /> {location} <br />
                  <FaCalendarAlt /> {display_date}
                </p>
                <p className={styles.description}>{full_description}</p>
              </div>
            </div>
          </>
        )}

        <div className="row justify-content-center py-3">
          <div className="col-12 col-sm-8 col-m-6 col-xl-5">
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
      </section>
    )
  }
}

export { HackathonTitle }

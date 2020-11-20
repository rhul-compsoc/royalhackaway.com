import React, { Component } from "react"
import styles from "./index.module.scss"
import { CombineStyles } from "../../helpers/CombineStyles"
import { Link } from "gatsby"
import Countdown from "react-countdown"

class HackathonTitle extends Component {
  render() {
    const {
      show_ticket_button = true,
      show_sponsor_button,
      show_livestream,
      sponsor_document,
      livestream_youtube,
      name,
      full_description,
      slug,
      start,
    } = this.props

    return (
      <section className={CombineStyles(styles.hackathonTitle)}>
        <div className="row justify-content-center py-4">
          <div className="col-12 col-xs-12 col-sm-8 text-center py-4">
            <h1 className="py-2">Create something awesome</h1>
          </div>
        </div>
        <div className="row justify-content-center py-2">
          {show_livestream ? (
            <div className="col-12 col-sm-8 col-m-6 col-xl-4">
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
          ) : (
            <>
              <div className="col-12 col-sm-8 col-m-6 col-xl-4 text-center">
                <p className={styles.description}>{full_description}</p>
              </div>
              <div className="col-12 text-center">
                <Countdown
                  renderer={({ days, hours, minutes, seconds }) => (
                    <span className="display-4">
                      {days} day{days !== 1 && "s"}, {hours} hour
                      {hours !== 1 && "s"}, {minutes} minute
                      {minutes !== 1 && "s"} and {seconds} second
                      {seconds !== 1 && "s"}
                    </span>
                  )}
                  date={start}
                />
              </div>
            </>
          )}
        </div>
        <div className="row justify-content-center py-5">
          <div className="col">
            <div className={styles.buttons}>
              {show_ticket_button ? (
                <a className="btn btn-hackaway-white px-4">Get a Ticket</a>
              ) : (
                <a className="btn btn-hackaway-white px-4 disabled">
                  Tickets coming soon™
                </a>
              )}
              <Link className="btn btn-hackaway-white px-4" to={slug}>
                {name}
              </Link>
              {show_sponsor_button && (
                <a
                  className="btn btn-hackaway-white px-4"
                  href={sponsor_document?.publicURL}
                >
                  Sponsor Us
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export { HackathonTitle }

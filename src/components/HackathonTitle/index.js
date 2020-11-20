import React, { Component } from "react"
import styles from "./index.module.scss"
import { CombineStyles } from "../../helpers/CombineStyles"
import { Link } from "gatsby"

class HackathonTitle extends Component {
  render() {
    const {
      show_ticket_button = true,
      show_sponsor_button,
      sponsor_document,
      name,
      slug,
    } = this.props

    return (
      <section className={CombineStyles(styles.hackathonTitle)}>
        <div className="row justify-content-center py-4">
          <div className="col-12 col-xs-12 col-sm-8 text-center py-4">
            <h1 className="py-2">Create something awesome</h1>
          </div>
        </div>
        <div className="row justify-content-center py-2">
          <div className="col-12 col-sm-8 col-xl-4 text-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse et auctor neque, id ornare nibh. Aliquam id velit
              aliquet, tristique ligula sit amet, dictum mauris.{" "}
            </p>
            <p>
              Puis condimentum tristique libero, ac imperdiet mauris vulputate
              ut. Pellentesque tellus sem, hendrerit vel orci vitae, euismod
              lobortis lectus. Quisque odio mi, faucibus at neque blandit,
              aliquam tincidunt sapien.
            </p>
          </div>
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

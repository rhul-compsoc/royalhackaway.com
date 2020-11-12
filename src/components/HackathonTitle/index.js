import React, { Component } from "react"
import styles from "./index.module.scss"
import { CombineStyles } from "../../helpers/CombineStyles"
import image from "./image.svg"

class HackathonTitle extends Component {
  render() {
    const { show_ticket_button = true } = this.props

    return (
      <section className={CombineStyles(styles.hackathonTitle)}>
        <div className="row justify-content-center py-5">
          <div className="col-12 col-xs-12 col-sm-8 col-lg-4 col-xl-4 text-left py-5">
            <div>
              <h1 className="py-2">Create something awesome</h1>
              <p className="py-2">
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
            <div className={styles.buttons}>
              {show_ticket_button && (
                <a className="btn btn-hackaway-white px-4">Get a Ticket</a>
              )}
              <a className="btn btn-hackaway-white px-4">Sponsor Us</a>
            </div>
          </div>
          <div className="col-auto d-none d-lg-flex d-xl-flex align-self-center">
            <div className="mx-auto image">
              <img className="image" src={image} alt="coder" />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export { HackathonTitle }

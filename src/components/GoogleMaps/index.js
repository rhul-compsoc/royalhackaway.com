import React, { Component } from "react"
import styles from "./index.module.scss"

class GoogleMaps extends Component {
  render() {
    return (
      <section className={styles.googleMaps}>
        <iframe
          src={this.props.map}
          frameBorder="0"
          title="Map of Royal Holloway, University of London"
        ></iframe>
      </section>
    )
  }
}

export { GoogleMaps }

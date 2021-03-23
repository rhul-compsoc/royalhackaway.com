import React, { Component } from "react"
import { googleMaps } from "./index.module.scss"

class EventLocationSection extends Component {
  render() {
    return (
      <section className={googleMaps}>
        <iframe
          src={this.props.map}
          frameBorder="0"
          title="Map of Royal Holloway, University of London"
        ></iframe>
      </section>
    )
  }
}

export { EventLocationSection }

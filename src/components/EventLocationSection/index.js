import React, { Component } from "react"
import { CombineStyles } from "../../helpers/CombineStyles"
import { googleMaps } from "./index.module.scss"

class EventLocationSection extends Component {
  render() {
    return (
      <section className={CombineStyles(googleMaps, this.props.className)}>
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

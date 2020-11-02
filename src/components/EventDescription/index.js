import React, { Component } from "react"
import styles from "./index.module.scss"

class EventDescription extends Component {
  render() {
    return (
      <section style={{ backgroundColor: this.props.colour }}>
        <div className="container text-light">
          <p className={styles.description}>{this.props.description}</p>
        </div>
      </section>
    )
  }
}

export { EventDescription }

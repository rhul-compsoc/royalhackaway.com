import React, { Component } from "react"
import { CombineStyles } from "../../helpers/CombineStyles"
import styles from "./index.module.scss"

class Footer extends Component {
  render() {
    return (
      <footer className={CombineStyles("bg-dark", "text-light", styles.footer)}>
        <span className={styles.footerContent}>
          Brought to you by the{" "}
          <a href="https://computingsociety.co.uk/">
            Royal Holloway, Computing Society
          </a>
        </span>
      </footer>
    )
  }
}

export { Footer }

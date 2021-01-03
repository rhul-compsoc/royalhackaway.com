import { Link } from "gatsby"
import React, { Component } from "react"
import Cookies from "universal-cookie"
import { CombineStyles } from "../../helpers/CombineStyles"
import styles from "./index.module.scss"

const HACKAWAY_COOKIE = "hackaway-show-cookie-cutter"
const ENABLE_GOOGLE_COOKIE = "gatsby-gdpr-google-analytics"
enum CookieCutterStates {
  ACCEPTED = "accepted",
  DECLINED = "declined",
}

type Props = Record<string, never>
interface State {
  show: boolean
}

class CookieCutter extends Component<Props, State> {
  cookies = new Cookies()
  state = {
    show: false,
  }

  constructor(props: Props) {
    super(props)

    this.hide = this.hide.bind(this)
    this.accept = this.accept.bind(this)
    this.decline = this.decline.bind(this)
  }

  componentDidMount(): void {
    const thing = this.cookies.get(HACKAWAY_COOKIE)
    switch (thing) {
      case CookieCutterStates.ACCEPTED:
        console.log("let the cookies flow!")
        break
      case CookieCutterStates.DECLINED:
        console.log("dont let the cookies flow!")
        break
      default:
        this.setState({
          show: true,
        })
    }
  }

  hide(): void {
    this.setState({
      show: false,
    })
  }

  accept(): void {
    this.cookies.set(HACKAWAY_COOKIE, CookieCutterStates.ACCEPTED)
    this.cookies.set(ENABLE_GOOGLE_COOKIE, true)
    this.hide()
  }

  decline(): void {
    this.cookies.set(HACKAWAY_COOKIE, CookieCutterStates.DECLINED)
    this.cookies.set(ENABLE_GOOGLE_COOKIE, false)
    this.hide()
  }

  render(): React.ReactNode {
    if (this.state.show) {
      return (
        <div className={styles.cookieCutter}>
          <div className="container">
            <div className="row">
              <div className={CombineStyles("col", styles.col)}>
                Do you want to enable Google Tracking cookies?
                <br />
                See our <Link to="/dataprotection">
                  Data Protection Policy
                </Link>{" "}
                for what we do with your data.
              </div>
              <div className={CombineStyles("col-auto", styles.col)}>
                <button
                  className="btn btn-hackaway-white"
                  onClick={this.decline}
                >
                  No
                </button>
              </div>
              <div className={CombineStyles("col-auto", styles.col)}>
                <button
                  className="btn btn-hackaway-orange"
                  onClick={this.accept}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return null
  }
}

export { CookieCutter }

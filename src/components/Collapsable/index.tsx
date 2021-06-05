import React, { Component } from "react"
import { ReactNode } from "react"
import { FaArrowDown } from "react-icons/fa"
import { CombineStyles } from "../../helpers/CombineStyles"
import * as styles from "./index.module.scss"

interface State {
  collapsed: boolean
}
interface Props {
  title: string
  html: string
  defaultState?: boolean
  collapsed?: boolean
  children?: ReactNode
}
class Collapsable extends Component<Props, State> {
  content = React.createRef<HTMLDivElement>()
  timeout: number

  constructor(props: Props) {
    super(props)

    this.state = {
      collapsed: props.collapsed || props.defaultState || true,
    }
    this.toggleState = this.toggleState.bind(this)
    this.getHeight = this.getHeight.bind(this)
  }
  collapse(): void {
    if (!this.state.collapsed) {
      this.toggleState()
    }
  }
  componentDidUpdate(): void {
    if (this.props.collapsed !== this.state.collapsed) {
      this.toggleState()
    }
  }
  toggleState(): void {
    // Cancel any other current animations
    clearTimeout(this.timeout)

    this.setState(currentState => {
      // Take a frame to calculate the height
      requestAnimationFrame(() => {
        const intendedHeight = this.getHeight() + "px"

        if (currentState.collapsed) {
          // Take a frame to set the new height
          requestAnimationFrame(() => {
            this.content.current.style.height = intendedHeight

            // Unset the height back to auto
            this.timeout = window.setTimeout(() => {
              this.content.current.style.height = ""
            }, 300)
          })
        } else {
          // Starting from the current height
          this.content.current.style.height = intendedHeight

          // Take a frame to hide the buddon
          requestAnimationFrame(() => {
            this.content.current.style.height = "0px"
          })
        }
      })

      return {
        collapsed: !currentState.collapsed,
      }
    })
  }
  getHeight(): number {
    const content = this.content.current
    // Save the current height
    const tempHeight = content.style.height

    // Let the button be free!
    content.style.height = ""

    // Get it's computed height
    const { height } = content.getBoundingClientRect()

    // Reset the height
    content.style.height = tempHeight

    return height
  }
  render(): JSX.Element {
    return (
      <div className={styles.collapsable}>
        <div
          className={CombineStyles("btn btn-hackaway-primary", styles.button)}
          onClick={() =>
            typeof this.props.collapsed !== "boolean" && this.toggleState()
          }
        >
          <div className={styles.labelContainer}>
            {this.props.title}
            <div
              className={CombineStyles(
                styles.arrowDown,
                !this.state.collapsed && styles.arrowUp
              )}
            >
              <FaArrowDown />
            </div>
          </div>
          <div
            className={styles.container}
            ref={this.content}
            style={{ height: "0px" }}
          >
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export { Collapsable }

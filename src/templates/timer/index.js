import { graphql } from "gatsby"
import React, { Component } from "react"
import { Layout } from "../../components/Layout"
import { SEO } from "../../components/SEO"
import styles from "./index.module.scss"

class Template extends Component {
  constructor(props) {
    super(props)
    const { markdownRemark } = props.data
    const { frontmatter } = markdownRemark
    const { hacking_start, hacking_end } = frontmatter

    const startTime = new Date(hacking_start)
    const endTime = new Date(hacking_end)
    const difference = endTime - startTime

    this.state = {
      remainingTime: 0,
      startTime,
      endTime,
      difference,
    }
    this.running = true
    this.updateTimer = this.updateTimer.bind(this)
  }
  componentDidMount() {
    requestAnimationFrame(this.updateTimer)
  }
  componentWillUnmount() {
    this.running = false
  }
  updateTimer() {
    const { startTime, endTime } = this.state
    const currentTime = new Date()
    const remainingTime = Math.max(
      0,
      endTime - Math.max(startTime, currentTime)
    )

    this.setState({
      remainingTime,
    })
    if (this.running) requestAnimationFrame(this.updateTimer)
  }
  render() {
    const { markdownRemark } = this.props.data
    const { frontmatter } = markdownRemark
    const { remainingTime, difference } = this.state
    const percentageComplete = 100 - (remainingTime / difference) * 100

    const { name, full_description, jumbotron_image } = frontmatter

    const secs = Math.floor(remainingTime / 1000) % 60
    const mins = Math.floor(remainingTime / 1000 / 60) % 60
    const hours = Math.floor(remainingTime / 1000 / 60 / 60)

    return (
      <Layout>
        <SEO
          title={name}
          description={full_description}
          image={jumbotron_image?.publicURL}
        />

        <section
          className={styles.background}
          style={{
            backgroundImage: `linear-gradient(to right, #f48c42, ${percentageComplete}%, green)`,
          }}
        >
          <h1>Hacking Time</h1>
          <p className="display-1">
            {hours} hour{hours !== 1 && "s"} {mins} min{mins !== 1 && "s"}{" "}
            {secs} sec{secs !== 1 && "s"}
          </p>
        </section>
      </Layout>
    )
  }
}

export default Template

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        name
        full_description
        jumbotron_image {
          publicURL
          childImageSharp {
            fluid(maxWidth: 2160) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        hacking_start
        hacking_end
      }
    }
  }
`

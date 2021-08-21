import React, { Component, useState } from "react"
import { partition } from "../../helpers/partition"
import { Collapsable } from "../Collapsable"
import { EventContext } from "../EventContext"
import { Section } from "../Section"
import { MDXRenderer } from "gatsby-plugin-mdx"

const EventFrequentlyAskedQuestionsSection = ({
  type,
  children,
  title = "Frequently Asked Questions",
  subtitle = "Answers to some questions we get a lot of!",
}) => {
  const [opened, setOpened] = useState(null)
  const data = React.useContext(EventContext)

  return (
    <Section title={title} subtitle={subtitle} type={type}>
      <div className="container">
        <div className="row">
          {partition(data.mdx.frontmatter.faq, 2).map((column, index) => (
            <div className="col-12 col-md-6" key={index}>
              {column.map(faq => (
                <div
                  key={faq.fields.slug}
                  onClick={() => {
                    if (faq.fields.slug === opened) {
                      setOpened(null)
                    } else {
                      setOpened(faq.fields.slug)
                    }
                  }}
                >
                  <Collapsable
                    title={faq.frontmatter.name}
                    collapsed={opened !== faq.fields.slug}
                  >
                    <MDXRenderer>{faq.body}</MDXRenderer>
                  </Collapsable>
                </div>
              ))}
            </div>
          ))}
          {children}
        </div>
      </div>
    </Section>
  )
}

export { EventFrequentlyAskedQuestionsSection }

import { StaticQuery } from "gatsby";
import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby"
import DropdownQuestion from "./DropdownQuestion";

import styles from './index.module.scss';

function DropdownFrequentlyAskedQuestions() {
  // Get the FAQ data
  const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(filter: {fields: {template: {eq: "faq"}}}) {
              nodes {
                id
                frontmatter {
                  name
                }
                html
              }
            }
          }
        `);
  return (
    <section className={styles.faq_section}>
      <div className="row justify-content-md-center">
        <div id="faq-title-wrapper" className="col-sm-4 text-center">
          <h2 className="display-4">FAQ</h2>
          <p className="text-muted">Questions people usually have.</p>
        </div>
      </div>
      <div className="row">
        <div className="container">
          <div className="row">
            {data.allMarkdownRemark.nodes.map((node, index) => (
              <DropdownQuestion key={index} title={node.frontmatter.name} html={node.html} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DropdownFrequentlyAskedQuestions;

import React, { ReactNode } from "react"
import { Layout } from "../components/Layout"
import { SiteSEO } from "../components/SiteSEO"

const DataProtectionPage = (): ReactNode => (
  <Layout>
    <SiteSEO title="Data Protection Policy" />
    <section>
      <div className="container">
        <h1>Data Protection Policy</h1>
        <p>
          We recognise our responsibility as an organisation collecting personal
          data to handle that data in a way that is commensurate with the Data
          Protection Act and our values as an organisation.
        </p>
        <p>The law states:</p>
        <ul>
          <li>Personal data shall be processed fairly and lawfully</li>
          <li>
            Personal data shall be obtained only for one or more specified and
            lawful purposes, and shall not be further processed in any manner
            incompatible with that purpose or purposes.
          </li>
          <li>
            Personal data shall be adequate, relevant and not excessive in
            relation to the purpose or purposes for which they are processed.
          </li>
          <li>
            Personal data shall be accurate and, where necessary, kept up to
            date.
          </li>
          <li>
            Personal data processed for any purpose or purposes shall not be
            kept for longer than is necessary for that purpose or those
            purposes.
          </li>
          <li>
            Personal data shall be processed in accordance with the rights of
            data subjects (individuals).
          </li>
          <li>
            Appropriate technical and organisational measures shall be taken
            against unauthorised or unlawful processing of personal data and
            against accidental loss or destruction of, or damage to, personal
            data.
          </li>
          <li>
            Personal data shall not be transferred to a country or territory
            outside the European Economic Area unless that country or territory
            ensures an adequate level of protection for the rights and freedoms
            of data subjects in relation to the processing of personal data.
          </li>
        </ul>
        <h2>We will</h2>
        <ul>
          <li>
            Only collect data that is absolutely necessary for us to run events,
            safely, securely and in compliance with other legal obligations
          </li>
          <li>
            Hold your data for a maximum of 3 days after the published event end
            time. This allows us to resolve any issues within a reasonable
            timeframe
          </li>
          <li>
            Only share personal data if absolutely necessary and only when
            relevant.
            <br />
            For example:
            <ul>
              <li>
                We will provide security with a list of everyone in the building
                (names and next of kin) in case of a fire
              </li>
              <li>
                In the case of a missing person or medical emergency, we will
                pass on the information we have on you (including next of kin)
                to the emergency services
              </li>
            </ul>
          </li>
          <li>
            Securely store your data in a master spreadsheet that only
            organisers have access to
          </li>
          <li>Anonymyse the statistics which we may pass on to sponsors</li>
          <li>
            Provide MLH with attendee information so they can assign your
            university points in the overall rankings
          </li>
        </ul>
        <h2>We will not</h2>
        <ul>
          Pass on your data to any third party (except as listed above) without
          your consent. This includes CVs, contact details, and other personal
          information.
        </ul>
        <ul>
          Sell your data to our sponsors. We provide sponsors with anonymised
          statistics to show age/university/diversity breakdowns, but we{" "}
          <strong>do not</strong> share any identifiable or personal data with
          them.
        </ul>
      </div>
    </section>
  </Layout>
)

export default DataProtectionPage

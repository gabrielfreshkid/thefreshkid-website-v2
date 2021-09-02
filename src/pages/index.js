import * as React from "react"
import { graphql } from "gatsby"
import "./index.css"

import Header from "../components/Header"
import FeatureBar from "../components/FeatureBar"
import Footer from "../components/Footer"
import ValueProposition from "../components/ValueProposition"

import ContentFeature1 from "../components/ContentFeature1"
import ContentFeature2 from "../components/ContentFeature2"
import ContentFeature3 from "../components/ContentFeature3"

function IndexPage({ data }) {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Header></Header>
        <FeatureBar></FeatureBar>

        <div className="heroImage">
          {data.allContentfulHeroImage.edges.map(({ node }, index) => (
            <img
              className={"heroImage"}
              alt={``}
              key={``}
              src={node.heroImage.file.url}
            />
          ))}
        </div>
        <ValueProposition></ValueProposition>

        <ContentFeature3></ContentFeature3>
        <ContentFeature2></ContentFeature2>
        <ContentFeature1></ContentFeature1>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    allContentfulHeroImage {
      edges {
        node {
          heroImage {
            file {
              url
            }
          }
        }
      }
    }
  }
`

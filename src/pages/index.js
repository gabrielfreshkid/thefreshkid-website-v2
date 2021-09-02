import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/seo"

import Header from "../components/Header"
import FeatureBar from "../components/FeatureBar"
import Footer from "../components/Footer"
import ValueProposition from "../components/ValueProposition"
import index from "./index.css"
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

          {/* <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
            /> */}
        </div>
        <ValueProposition></ValueProposition>
        <ContentFeature1></ContentFeature1>
        <ContentFeature2></ContentFeature2>
        <ContentFeature3></ContentFeature3>
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

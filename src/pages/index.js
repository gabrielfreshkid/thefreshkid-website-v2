import * as React from "react"
import { graphql } from "gatsby"
import ReactDOM  from "react-dom"
import "./index.css"

import Header from "../components/Header"
import FeatureBar from "../components/FeatureBar"
import Footer from "../components/Footer"
import ValueProposition from "../components/ValueProposition"

import ContentFeature2 from "../components/ContentFeature2"
import ContentFeature3 from "../components/ContentFeature3"
import ContentFeature1 from "../components/ContentFeature1"
import Quote1 from "../components/Quote1"
import NewsletterBar from "../components/NewsletterBar"
import HeroImage from "../components/HeroImage"

function IndexPage({ data }) {
  return (
    <div className="page-container">
      <div className="content-wrap">  
        <Header></Header>
        {/* <FeatureBar></FeatureBar> */}
        <HeroImage/>

        
        <ValueProposition></ValueProposition>

        <ContentFeature1></ContentFeature1>
        <ContentFeature2></ContentFeature2>
        <Quote1 />
        <ContentFeature3></ContentFeature3>
        <NewsletterBar />
      </div>

      <Footer></Footer>
    </div>
  )
}

export default IndexPage

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Header from "../components/header"
import FeatureBar from "../components/featureBar"
import Footer from "../components/footer"
import ValueProposition from "../components/ValueProposition"
import index from "./index.css"

const IndexPage = () => (

<div className="page-container">
    
    <div className="content-wrap">

        <Header></Header>
        <FeatureBar></FeatureBar>

        <div className="heroImage">Hero Image</div>
        <ValueProposition></ValueProposition>
        <div className="contentFeature">Content feature 1</div>
         <div className="contentFeature">Content feature 2</div>
          <div className="contentFeature">Content feature 3</div>


        
    </div>

<Footer></Footer>

</div>
)

export default IndexPage

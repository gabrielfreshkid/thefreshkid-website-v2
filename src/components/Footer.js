import React, { useState } from "react"
import "./Footer.css"
import { Link, graphql, useStaticQuery } from "gatsby"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allContentfulAsset {
        edges {
          node {
            file {
              url
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <nav className="footer-bar">
        <div className="footer-bar-container">
          <div className="footer-col-1">
            <div className="footer-row-1">
              <h1>CRAFTED IN ITALY & UK</h1>
            </div>

            <div className="footer-row-2">
              <img
                className={"footer-marqueLogo"}
                alt={``}
                key={``}
                src={data.allContentfulAsset.edges[11].node.file.url}
              />

              <img
                className={"footer-marqueLogo"}
                alt={``}
                key={``}
                src={data.allContentfulAsset.edges[8].node.file.url}
              />

              <img
                className={"footer-marqueLogo"}
                alt={``}
                key={``}
                src={data.allContentfulAsset.edges[9].node.file.url}
              />

              <img
                className={"footer-marqueLogo"}
                alt={``}
                key={``}
                src={data.allContentfulAsset.edges[10].node.file.url}
              />
            </div>
          </div>

          <div className="footer-col-2">
            <div className="footer-row-1">
              <h1>RESPONSIBLY MADE</h1>
            </div>

            <div className="footer-row-2-split">
              <div className="inner-col-1">
                <div className="title">
                  <h1>COMPANY</h1>
                </div>

                <div className="footer-link">
                  <Link to="/page-2/">About Us</Link>
                </div>
                <div className="footer-link">
                  <Link to="/page-2/">Careerist</Link>
                </div>
                <div className="footer-link">
                  <Link to="/page-2/">Pricing</Link>
                </div>
                <div className="footer-link">
                  <Link to="/page-2/">Press Room</Link>
                </div>
                <div className="footer-link">
                  <Link to="/page-2/">Support</Link>
                </div>
                <div className="footer-link">
                  <Link to="/page-2/">Trust</Link>
                </div>
                <div className="footer-link">
                  <Link to="/page-2/">Status</Link>
                </div>
                <div className="footer-link">
                  <Link to="/page-2/">Customer Experience Center</Link>
                </div>
              </div>

              <div className="inner-col-2">
                <div className="title">
                  <h1>RESOURCES</h1>
                </div>
                <div className="footer-link">
                  <Link to="/page-2/">Blogs</Link>
                </div>
                <div className="footer-link">
                  <Link to="/page-2/">Demos</Link>
                </div>
                <div className="footer-link">
                  <Link to="/page-2/">Webinars</Link>
                </div>
                <div className="footer-link">
                  <Link to="/page-2/">Whitepapers</Link>
                </div>
                <div className="footer-link">
                  <Link to="/page-2/">Datasheets</Link>
                </div>
                <div className="footer-link">
                  <Link to="/page-2/">Infographics</Link>
                </div>
                <div className="footer-link">
                  <Link to="/page-2/">Zero Trust Assesment</Link>
                </div>
                <div className="footer-link">
                  <Link to="/page-2/">ROI Calculator</Link>
                </div>
                <div className="footer-link">
                  <Link to="/page-2/">Business @ Work</Link>
                </div>
                <div className="footer-link">
                  <Link to="/page-2/">Identity 101</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-col-1">
            <div className="footer-row-1">
              <h1>FREE SHIPPING £55+</h1>
            </div>

            <div className="footer-row-2">
              {/* <div className="footer-socialMediaItems">
                <img
                  className={"footer-Youtube"}
                  alt={``}
                  key={``}
                  src={data.allContentfulAsset.edges[21].node.file.url}
                />

                <img
                  className={"footer-Facebook"}
                  alt={``}
                  key={``}
                  src={data.allContentfulAsset.edges[20].node.file.url}
                />

                <img
                  className={"footer-Twitter"}
                  alt={``}
                  key={``}
                  src={data.allContentfulAsset.edges[23].node.file.url}
                />

                <img
                  className={"footer-Facebook"}
                  alt={``}
                  key={``}
                  src={data.allContentfulAsset.edges[24].node.file.url}
                />
              </div> */}

              <img
                className={"footer-Photo"}
                alt={``}
                key={``}
                src={data.allContentfulAsset.edges[25].node.file.url}
              />
              <div className="footer-RightText">
              <strong>Oktane21</strong>
              <p>Catch up on all Oktane21 keynotes, sessions and annoucments.</p>
              <p>Learn More</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

import React, { useState } from "react"
import "./footer.css"
import { Link } from "gatsby"

function Footer() {
  return (
    <div>
      <nav className="footer-bar">
        <div className="footer-bar-container">
          <div className="footer-col-1">
            <div className="footer-row-1">
              <h1>CRAFTED IN ITALY & UK</h1>
            </div>

            <div className="footer-row-2">Logo Logo</div>
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

            <div className="footer-row-2"></div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Footer

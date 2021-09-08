import React, { useState } from "react"
import "./Footer.css"
import { Link, graphql, useStaticQuery } from "gatsby"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allContentfulFooter {
        edges {
          node {
            valueProposition1
            valueProposition2
            valueProposition3
            companyLogo {
              file {
                url
              }
            }
            additionalImage {
              file {
                url
              }
            }
            displayBoard {
              file {
                url
              }
            }
            partnerLogos {
              bigCommerceLogo {
                file {
                  url
                }
              }
              eConsultancyLogo {
                file {
                  url
                }
              }
              idmLogo {
                file {
                  url
                }
              }
            }
            socialIcons {
              facebookIcon {
                file {
                  url
                }
              }
              linkedInIcon {
                file {
                  url
                }
              }
              twitterIcon {
                file {
                  url
                }
              }
              youtubeIcon {
                file {
                  url
                }
              }
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
              <h1>{data.allContentfulFooter.edges[0].node.valueProposition1}</h1>
            </div>

            <div className="footer-row-2">
              <div className="footerLogoSection">
                <img
                  className={"footerCompanyLogo"}
                  alt={``}
                  key={``}
                  src={data.allContentfulFooter.edges[0].node.companyLogo.file.url}
                />

                <div className="footerPartnerLogos">
                  
                  <div className="footerPartnerLogosRow1"></div>
                  <p className="footerTextLeft">Our technology partnership and certifications</p>
                  <img
                    className={"footerBigCommerceLogo"}
                    alt={``}
                    key={``}
                    src={data.allContentfulFooter.edges[0].node.partnerLogos.bigCommerceLogo.file.url}
                  />
                  </div>
                  <div className="footerPartnerLogosRow2">
                    <img
                      className={"footerEConsultancyLogo"}
                      alt={``}
                      key={``}
                      src={data.allContentfulFooter.edges[0].node.partnerLogos.eConsultancyLogo.file.url}
                    />

                    <img
                      className={"footerIDMLogo"}
                      alt={``}
                      key={``}
                      src={data.allContentfulFooter.edges[0].node.partnerLogos.idmLogo.file.url}
                    />
                  </div>
              </div>
            </div>
          </div>

          <div className="footer-col-2">
            <div className="footer-row-1">
              <h1>{data.allContentfulFooter.edges[0].node.valueProposition2}</h1>
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
              <h1>{data.allContentfulFooter.edges[0].node.valueProposition3}</h1>
            </div>

            <div className="footer-row-3">
              <div className="footerSocialMediaItems">
                <img
                  className={"footerSocialIcon"}
                  alt={``}
                  key={``}
                  src={data.allContentfulFooter.edges[0].node.socialIcons.linkedInIcon.file.url}
                />

                <img
                  className={"footerSocialIcon"}
                  alt={``}
                  key={``}
                  src={data.allContentfulFooter.edges[0].node.socialIcons.youtubeIcon.file.url}
                />

                <img
                  className={"footerSocialIcon"}
                  alt={``}
                  key={``}
                  src={data.allContentfulFooter.edges[0].node.socialIcons.facebookIcon.file.url}
                />

                <img
                  className={"footerSocialIcon"}
                  alt={``}
                  key={``}
                  src={data.allContentfulFooter.edges[0].node.socialIcons.twitterIcon.file.url}
                />
              </div>
              <div className="footerPhoto">
                <img
                  className={"footerImage"}
                  alt={``}
                  key={``}
                  src={data.allContentfulFooter.edges[0].node.additionalImage.file.url}
                />

                <img
                  className={"footerPhotoBackDrop"}
                  alt={``}
                  key={``}
                  src={data.allContentfulFooter.edges[0].node.displayBoard.file.url}
                />
              </div>

              <div className="footerRightText">
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

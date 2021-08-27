import React from 'react'
import { graphql } from "gatsby"
import "./ValueProposition.css"
import { node } from 'prop-types'
import { StaticImage } from "gatsby-plugin-image"

const ValueProposition = ({ data }) => {
    return (
        <div className="valuePropBar">
            {/* <div>
              {data.allContentfulValuePropositions.edges.map( ({node}, index) => (
                <h1>{node.title}</h1>
              ))}
            </div> */}
            <div className="row">
              <div className="column">
                <div className="row">
                  <div className="column left">
                    <StaticImage
                      className="valuePropIcon"
                      src="../images/Marqueblack.png"
                      alt="A Gatsby astronaut"
                    />
                  </div>
                  <div className="column right">
                    <h5>ENJOY FREE DELIVERY</h5>
                    <p className="description">Ends tonight</p>
                  </div>
                </div>
              </div>
              <div className="column">
              <div className="row">
                  <div className="column left">
                    <StaticImage
                      className="valuePropIcon"
                      src="../images/Marqueblack.png"
                      alt="A Gatsby astronaut"
                    />
                  </div>
                  <div className="column right">
                    <h5>OUR EIP PROGRAMME</h5>
                    <p className="description">Discover the exclusive rewards and benifits</p>
                  </div>
                </div>
              </div>
              <div className="column">
              <div className="row">
                  <div className="column left">
                    <StaticImage
                      className="valuePropIcon"
                      src="../images/Marqueblack.png"
                      alt="A Gatsby astronaut"
                    />
                  </div>
                  <div className="column right">
                    <h5>THE MR PORTER APP</h5>
                    <p className="description">Seamless on-the-go shopping</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}


export default ValueProposition;

// export const query = graphql
// `query MyQueryVP {
//   allContentfulValuePropositions {
//     edges {
//       node {
//         title
//         description
//         icon {
//           fluid {
//             sizes
//           }
//           file {
//             url
//           }
//         }
//       }
//     }
//   }
// }
// `
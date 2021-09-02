import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./ValueProposition.css"
import { node } from "prop-types"

export default function ValueProposition() {
  const data = useStaticQuery(graphql`
    query ValuePropQuery {
      allContentfulValuePropositions {
        edges {
          node {
            icon {
              file {
                url
              }
            }
            valuePropText
          }
        }
      }
    }
  `)

  return (
    <div className="valuePropBar">
      {data.allContentfulValuePropositions.edges.map(({ node }, index) => (
        <div className="valueProp">
          <div className="valuePropImg">
            <img
              className={"valuePropLogo"}
              alt={``}
              key={``}
              src={node.icon.file.url}
            />
          </div>
          <div className="valuePropText">{node.valuePropText} </div>
        </div>
      ))}
    </div>
  )
}

import React, { useState } from "react"
import "./ContentFeature1.css"
import { graphql, useStaticQuery } from "gatsby"

export default function ContentFeature1() {
  const data = useStaticQuery(graphql`
    query ContentFeature1Query {
      allContentfulFlexStyleBody {
        edges {
          node {
            image {
              file {
                url
              }
            }
            title
            subTitle
            category
            callToAction
            bodyText {
              bodyText
            }
            displayBoard {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="contentFeature1">
      <img
        className={"contentFeatureImg1"}
        alt={``}
        key={``}
        src={data.allContentfulFlexStyleBody.edges[2].node.displayBoard.file.url}
      />
      <img
        className={"contentFeatureImg1"}
        alt={``}
        key={``}
        src={data.allContentfulFlexStyleBody.edges[2].node.image.file.url}
      />
      <p>{data.allContentfulFlexStyleBody.edges[2].node.title}</p>
      <p>{data.allContentfulFlexStyleBody.edges[2].node.subTitle}</p>
      <p>{data.allContentfulFlexStyleBody.edges[2].node.category}</p>
      <p>{data.allContentfulFlexStyleBody.edges[2].node.callToAction}</p>
      <p>{data.allContentfulFlexStyleBody.edges[2].node.bodyText.bodyText}</p>


    </div>
  )

  // return <div className="contentFeature">
  //         {data.allContentfulFlexStyleBody.edges[0].map(({ node }, index) => (
  //           <img
  //             className={"contentFeatureImg"}
  //             alt={``}
  //             key={``}
  //             src={node.image.file.url}
  //           />
  //         ))}
  // </div>
}

import React, { useState } from "react"
import "./ContentFeature2.css"
import { graphql, useStaticQuery } from "gatsby"

export default function ContentFeature2() {
  const data = useStaticQuery(graphql`
    query ContentFeature2Query {
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
    <div className="contentFeature2">
      <img
        className={"contentFeatureImg2"}
        alt={``}
        key={``}
        src={data.allContentfulFlexStyleBody.edges[2].node.displayBoard.file.url}
      />
      <img
        className={"contentFeatureImg2"}
        alt={``}
        key={``}
        src={data.allContentfulFlexStyleBody.edges[1].node.image.file.url}
      />
      <p>{data.allContentfulFlexStyleBody.edges[1].node.title}</p>
      <p>{data.allContentfulFlexStyleBody.edges[1].node.subTitle}</p>
      <p>{data.allContentfulFlexStyleBody.edges[1].node.category}</p>
      <p>{data.allContentfulFlexStyleBody.edges[1].node.callToAction}</p>
      <p>{data.allContentfulFlexStyleBody.edges[1].node.bodyText.bodyText}</p>


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

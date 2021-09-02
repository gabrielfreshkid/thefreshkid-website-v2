import React, { useState } from "react"
import "./ContentFeature3.css"
import { graphql, useStaticQuery } from "gatsby"

export default function ContentFeature3() {
  const data = useStaticQuery(graphql`
    query ContentFeature3Query {
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
    <div className="contentFeature3">
      {/* <img
        className={"contentFeatureImg3"}
        alt={``}
        key={``}
        src={
          data.allContentfulFlexStyleBody.edges[2].node.displayBoard.file.url
        }
      /> */}
      <img
        className={"contentFeatureImg3"}
        alt={``}
        key={``}
        src={data.allContentfulFlexStyleBody.edges[0].node.image.file.url}
      />
      <p>{data.allContentfulFlexStyleBody.edges[0].node.title}</p>
      <p>{data.allContentfulFlexStyleBody.edges[0].node.subTitle}</p>
      <p>{data.allContentfulFlexStyleBody.edges[0].node.category}</p>
      <p>{data.allContentfulFlexStyleBody.edges[0].node.callToAction}</p>
      <p>{data.allContentfulFlexStyleBody.edges[0].node.bodyText.bodyText}</p>
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

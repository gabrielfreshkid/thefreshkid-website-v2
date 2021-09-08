import React, { useState } from "react"
import "./ContentFeature1.css"
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
            displayBar {
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
      <div className="boardTextContainer3">
        <div className={'textContainer3'}>
          <p className={'subTitle3'}>{data.allContentfulFlexStyleBody.edges[1].node.subTitle}</p>
          <p className={'title3'}>{data.allContentfulFlexStyleBody.edges[1].node.title}</p>
          <p className={'categoryName3'}>{data.allContentfulFlexStyleBody.edges[1].node.category}</p>
          <p className={'bodyText3'}>{data.allContentfulFlexStyleBody.edges[1].node.bodyText.bodyText}</p>
          <p className={'callToAction3'}>{data.allContentfulFlexStyleBody.edges[1].node.callToAction}</p>
        </div>
        <div className={"displayBoardContainer3"}>
          <div className="displayBoard3">

          </div>
        </div>
      </div>

      <div className={"displayBarContainer3"}>
        <div className="displayBar3">

        </div>
      </div>
      <div className={"imageContainer3"}>
        <img
          className={"bigImage"}
          alt={``}
          key={``}
          src={data.allContentfulFlexStyleBody.edges[1].node.image.file.url}
        />
      </div>
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

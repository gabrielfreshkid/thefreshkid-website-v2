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
    <div className="contentFeature2">
      <div className={'imageContainer2'}>
        <img
          className={"bigImage2"}
          alt={``}
          key={``}
          src={data.allContentfulFlexStyleBody.edges[0].node.image.file.url}
        />
      </div>

      <div className={"displayBoardContainer2"}>
        {/* <img
          className={"displayBoard2"}
          alt={``}
          key={``}
          src={data.allContentfulFlexStyleBody.edges[0].node.displayBoard.file.url}
        /> */}
      </div>

      <div className={"displayBarContainer2"}>
        {/* <img
          className={"displayBar2"}
          alt={``}
          key={``}
          src={data.allContentfulFlexStyleBody.edges[0].node.displayBar.file.url}
        /> */}
      </div>

      <div className={'textContainer2'}>
        <p className={'categoryName2'}>{data.allContentfulFlexStyleBody.edges[0].node.category}</p>
        <p className={'title2'}>{data.allContentfulFlexStyleBody.edges[0].node.title}</p>
        <p className={'subTitle2'}>{data.allContentfulFlexStyleBody.edges[0].node.subTitle}</p>
        <p className={'bodyText2'}>{data.allContentfulFlexStyleBody.edges[0].node.bodyText.bodyText}</p>
        <p className={'callToAction2'}>{data.allContentfulFlexStyleBody.edges[0].node.callToAction}</p>
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

import React, { useState } from "react"
import "./ContentFeature2.css"
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
    <div className="contentFeature1">
      <div className="imageContainer1">
        <img
          className={"bigImage1"}
          alt={``}
          key={``}
          src={data.allContentfulFlexStyleBody.edges[0].node.image.file.url}
        />
      </div>

      <div className={'textContainer1'}>
        <p className={'categoryName1'}>{data.allContentfulFlexStyleBody.edges[0].node.category}</p>
        <p className={'title1'}>{data.allContentfulFlexStyleBody.edges[0].node.title}</p>
        <p className={'subTitle1'}>{data.allContentfulFlexStyleBody.edges[0].node.subTitle}</p>
        <p className={'bodyText1'}>{data.allContentfulFlexStyleBody.edges[0].node.bodyText.bodyText}</p>
        <p className={'callToAction1'}>{data.allContentfulFlexStyleBody.edges[0].node.callToAction}</p>
      </div>
    </div>
  )
}

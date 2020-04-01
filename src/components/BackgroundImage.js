import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ filename }) => {
  const data = useStaticQuery(
    graphql`
      query {
        placeholderImage: allFile(
          filter: { sourceInstanceName: { eq: "images" } }
        ) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 2480, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `
  )
  const image = data.placeholderImage.edges.find(
    ({ node }) => node.relativePath === `${filename}.png`
  )

  if (!image) {
    return null
  }
  return (
    <Img
      alt="background image"
      fluid={image.node.childImageSharp.fluid}
      className="top-0 min-w-screen h-screen -mt-full"
      imgStyle={{ objectPosition: `center right`, position: `fixed` }}
      backgroundColor
    />
  )
}

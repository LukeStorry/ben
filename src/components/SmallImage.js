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
                fluid(maxWidth: 150, quality: 100) {
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
      fluid={image.node.childImageSharp.fluid}
      className="rounded-full mx-auto my-8 mx-4 max-w-xs max-w-150"
    />
  )
}

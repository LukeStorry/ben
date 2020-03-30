import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

export default ({ filename, style, children }) => {
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
    <BackgroundImage
      fluid={image.node.childImageSharp.fluid}
      style={{
        height: `90vh`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `space-evenly`,
        backgroundColor: `grey`,
        backgroundSize: `cover`,
        backgroundPosition: `center right`,
        ...style,
      }}
      children={children}
    />
  )
}
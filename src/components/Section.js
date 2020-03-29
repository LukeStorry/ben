import React from "react"
import SmallImage from "./SmallImage"
import { Link } from "gatsby"

export default ({id, header, image, text, link, style}) => (
  <section id="id" style={ {padding: `2rem`, ...style}}>
    <h2>{header}</h2>
    <SmallImage filename={image} />

    <p>text
    </p>
    {link &&
    <Link to={link}>Info</Link>
    }
  </section>
)

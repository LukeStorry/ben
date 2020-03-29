import React from "react"
import SmallImage from "./SmallImage"
import { Link } from "gatsby"

export default ({id, header, image, text, link, style, right}) => (
  <section id="id" style={ {padding: `6rem`, textAlign: right?`right`:`left`, ...style}}>
    <h2>{header}</h2>

    <div class="row">
    {!right && <div class="two columns"><SmallImage filename={image} /></div>}
    <div class="ten columns"><p>{text}</p></div>
    {right && <div class="two columns"><SmallImage filename={image} /></div>}
  </div>
    

    

    {link && false &&
    <Link to={link}>Info</Link>
    }
  </section>
)

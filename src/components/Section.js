import React from "react"
import SmallImage from "./SmallImage"
import { Link } from "gatsby"

export default ({ id, header, image, text, link, style, right }) => (
  <section
    id={id}
    style={{
      zIndex: 3,
      backgroundColor: `black`,
      color: "white",
      padding: `7rem`,
      textAlign: right ? `right` : `left`,
      position: `sticky`,
      top: 0,
      ...style,
    }}
  >
    <h2 style={{ padding: `0 3rem 5rem 3rem` }}>{header}</h2>

    <div class="row">
      {!right && (
        <div class="three columns">
          <SmallImage filename={image} />
        </div>
      )}
      <div class="nine columns" style={{ padding: `3rem` }}>
        <p>{text}</p>
      </div>
      {right && (
        <div class="three columns">
          <SmallImage filename={image} />
        </div>
      )}
    </div>

    {link && false && <Link to={link}>Info</Link>}
  </section>
)

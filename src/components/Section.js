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
      textAlign: right ? `right` : `left`,
      position: `sticky`,
      top: `3rem`,
      minHeight: "60vh",
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      justifyContent: `space-evenly`,
      ...style,
    }}
  >
    <h2 style={{ padding: `7rem 3rem 0rem 3rem` }}>{header}</h2>

    <div
      className="row container"
      style={{ padding: `2rem`, marginTop: `4rem` }}
    >
      {!right && (
        <div className="three columns">
          <SmallImage filename={image} />
        </div>
      )}
      <div className="nine columns" style={{ padding: `2rem` }}>
        <p>{text}</p>
      </div>
      {right && (
        <div className="three columns">
          <SmallImage filename={image} />
        </div>
      )}
    </div>

    {link && false && <Link to={link}>Info</Link>}
  </section>
)

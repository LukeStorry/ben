import React from "react"
import SmallImage from "./SmallImage"

export default ({
  id,
  color,
  header,
  imageFile,
  text,
  right,
  children,
  shrinkable,
  style,
}) => {
  const image = (
    <div className="three columns">
      <SmallImage filename={imageFile} />
    </div>
  )

  const defaultChildren = (
    <>
      <h2 style={{ padding: `3rem 3rem 0rem 3rem` }}>{header}</h2>

      <div
        className="row container"
        style={{ padding: `2rem`, marginTop: `4rem` }}
      >
        {!right && image}

        <div className="nine columns" style={{ padding: `2rem` }}>
          <p>{text}</p>
        </div>

        {right && image}
      </div>
    </>
  )

  return (
    <div style={{ margin: `0`, height: shrinkable ? `auto` : `100vh` }}>
      <section
        id={id}
        style={{
          backgroundColor: color,
          minHeight: shrinkable ? 0 : `50vh`,
          ...style,
        }}
      >
        {children || defaultChildren}
      </section>
    </div>
  )
}

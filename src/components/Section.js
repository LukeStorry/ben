import React from "react"
import SmallImage from "./SmallImage"

export default ({
  id,
  color,
  shrinkable,
  header,
  imageFile,
  text,
  right,
  children,
}) => {
  const defaultChildren = (
    <>
      <h2 className="font-bold text-lg">{header}</h2>

      <div>
        {!right && <SmallImage filename={imageFile} />}

        <div className="nine columns" style={{ padding: `2rem` }}>
          <p>{text}</p>
        </div>

        {right && <SmallImage filename={imageFile} />}
      </div>
    </>
  )

  return (
    <div id={`${id}-scroll-wrapper`} className={shrinkable ? "h-auto" : "h-screen"}>
      <section
        id={id}
        className={
          `sticky flex flex-col justify-around items-center opacity-75 top-20 bg-${color} ` +
          (shrinkable ? "min-h-0" : "min-h-50")
        }
      >
        {children || defaultChildren}
      </section>
    </div>
  )
}

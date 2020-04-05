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
  fullHeight,
  children,
}) => {
  const defaultChildren = (
    <>
      <h2 className="font-bold text-lg px-2 py-10">{header}</h2>

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
          `sticky flex flex-col justify-evenly items-center opacity-75 top-20 text-white bg-${color}`
          + (shrinkable ? " min-h-0" : " min-h-50")
          + (fullHeight ? " h-full" : "  h-auto")
        }
      >
        {children || defaultChildren}
      </section>
    </div>
  )
}

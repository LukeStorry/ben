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
    <div className="flex flex-wrap w-full mb-4 md:px-12 justify-center">
      {!right && <SmallImage filename={imageFile} />}
      <p
        className={
          "md:w-1/3 w-full my-auto py-8 px-4 text-center" +
          (right ? " md:text-right" : " md:text-left")
        }
      >
        {text}
      </p>

      {right && <SmallImage filename={imageFile} />}
    </div>
  )

  return (
    <div
      id={`${id}-scroll-wrapper`}
      className={shrinkable ? "h-auto py-12" : "h-screen"}
    >
      <section
        id={id}
        className={
          `sticky flex flex-col justify-evenly items-center opacity-75 top-20 bg-${color} text-white` +
          (shrinkable ? " min-h-0" : " min-h-60vh") +
          (fullHeight ? " h-full" : "  h-auto")
        }
      >
        {header && <h2 className="font-bold text-lg px-2 py-10">{header}</h2>}

        {children || defaultChildren}
      </section>
    </div>
  )
}

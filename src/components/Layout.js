import React from "react"
import { Link } from "gatsby"

import "../css/style.css"

export default ({ children }) => {
  return (
    <>
      <header className="sticky top-0 z-50 bg-purple-400 p-2">
        <h3 className="text-xl font-bold text-center text-white">
          <Link to="/">Ben Storry</Link>
        </h3>
      </header>
      <main>{children}</main>
    </>
  )
}

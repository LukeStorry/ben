import React from "react"
import { Link } from "gatsby"

import "../css/normalize.css"
import "../css/skeleton.css"

export default ({ children, style }) => {
  return (
    <>
      <header
        style={{
          background: `orange`,
          height: `6rem`,
        }}
      >
        <h2>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
              padding: `1rem`,
            }}
          >
            {"Ben Storry"}
          </Link>
        </h2>

        {/* TODO Add other section links */}
      </header>
      <main style={style}>{children}</main>

      <footer></footer>
    </>
  )
}

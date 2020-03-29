import React from "react"
import { Link } from "gatsby"

import "../css/normalize.css"
import "../css/skeleton.css"

export default ({ children, style }) => {
  return (
    <>
      <header
        style={{
          // position: `sticky`,
          // top: 0,
          // zIndex: 5,
          background: `orange`,
          height: `6rem`,
          padding: `0.5rem 0 0 1rem`,
        }}
      >
        <h2>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
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

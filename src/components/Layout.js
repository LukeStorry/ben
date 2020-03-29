import React from "react"
import { Link } from "gatsby"

import "../css/normalize.css"
import "../css/skeleton.css"

export default ({ children, style }) => {
  return (
    <>
      <header
        style={{
          position: `sticky`,
          top: 0,
          zIndex: 4,
          background: `darkorange`,
          padding: `0.5rem 0 0 1rem`,
        }}
      >
        <h4
          style={{
            textAlign: `center`,
            margin: 0,
          }}
        >
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {"Ben Storry"}
          </Link>
        </h4>

        {/* TODO Add other section links */}
      </header>
      <main style={style}>{children}</main>

      {/* <footer>© LS 2020</footer> */}
    </>
  )
}

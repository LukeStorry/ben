import React from "react"
import { Link } from "gatsby"

import "../css/style.css"

export default ({ children, style }) => {
  return (
    <>
      <header
        style={{
          position: `sticky`,
          top: 0,
          zIndex: 99,
          background: `#B19CD9`,
          padding: `1rem`,
        }}
      >
        <h3
          style={{
            textAlign: `center`,
            margin: 0,
          }}
        >
          <Link
            to="/"
            style={{
              color: `#444`,
              textDecoration: `none`,
            }}
          >
            {"Ben Storry"}
          </Link>
        </h3>

        {/* TODO Add other section links? */}
      </header>
      <main style={style}>{children}</main>

      {/* <footer>© LS 2020</footer> */}
    </>
  )
}

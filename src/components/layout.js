import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "../css/normalize.css"
import "../css/skeleton.css"

const Layout = ({ children }) => {
  return (
    <>
      <header
        style={{
          background: `orange`,
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {"Ben Storry"}
            </Link>
          </h1>
        </div>
      </header>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer></footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

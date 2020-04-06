import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <div className="grid grid-rows-4 text-center gap-8 pt-12 px-4">
      <SEO title="Page Not found" />

      <h1 className="font-bold text-lg">Error 404: Nothing here...</h1>

      <p>Sorry there's not a page at this link.</p>
      <p className="text-sm">
        {"If you were expecting one, please "}
        <Link
          className="underline text-purple-500 hover:text-purple-700"
          to="/#contact"
        >
          let us know
        </Link>
        .
      </p>

      <div>
        <Link className="button button-inverse" to="/">
          Head home
        </Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

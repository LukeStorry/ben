import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <div style={{ textAlign: "center" }}>
      <SEO title="404: Not found" />
      <h1>Nothing here...</h1>
      <p>Sorry there's not a page at this link.</p>
      <Link to="/">{"Head home"}</Link>
    </div>
  </Layout>
)

export default NotFoundPage

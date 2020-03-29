import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Another Page" />
    <h1>Hi from the other page</h1>
    <p>More specific pages for the other sections will be added soon!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

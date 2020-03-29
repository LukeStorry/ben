import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const SecondPage = () => (
  <Layout style={{ padding: `2rem` }}>
    <SEO title="Another Page" />
    <h1>Hi from the other page</h1>
    <p>More specific pages for the other sections will be added soon!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

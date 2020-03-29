import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SurfSection from "../components/home/SurfSection"
import MassageSection from "../components/home/MassageSection"
import TutoringSection from "../components/home/TutoringSection"
import FootballSection from "../components/home/FootballSection"

const IndexPage = () => (
  <div style={{ background: "black", color: "white" }}>
    <Layout>
      <SEO title={"Home"} />
      <h1>Hi</h1>
      <p>Welcome to your new site.</p>
      <p>Great stuff to come.</p>

      <SurfSection />
      <MassageSection />
      <TutoringSection />
      <FootballSection />

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  </div>
)

export default IndexPage

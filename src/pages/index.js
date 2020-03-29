import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SurfInstructor from "../components/homeSections/surfInstructor"
import SportsMassage from "../components/homeSections/sportsMassage"
import Tutoring from "../components/homeSections/tutoring"
import FootballCoachReferee from "../components/homeSections/footballCoachReferee"

const IndexPage = () => (
  <Layout>
    <SEO title={"Home"} />
    <h1>Hi</h1>
    <p>Welcome to your new site.</p>
    <p>Great stuff to come.</p>

    <SurfInstructor />
    <SportsMassage />
    <Tutoring />
    <FootballCoachReferee />

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

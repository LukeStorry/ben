import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BackgroundImage from "../components/BackgroundImage"
import Section from "../components/Section"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title={"Home"} />
    <BackgroundImage filename="surf-banner" />
    <div
      style={{
        position: `relative`,
        height: `100vh`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `space-evenly`,
      }}
    >
      <h5 style={{ textAlign: `center`, color: "white", padding: `3rem` }}>
        Passionate surfer, student and part time sports coach at Loughborough
        University.
      </h5>
      <div className="row container">
        <div className="three columns">
          <Link to="/#surf" children={"Surf Coach"} className="button column" />
        </div>
        <div className="three columns">
          <Link
            to="/#massage"
            children={"Sports Massage"}
            className="button column"
          />
        </div>
        <div className="three columns">
          <Link to="/#tutor" children={"Tutoring"} className="button column" />
        </div>
        <div className="three columns">
          <Link
            to="/#football"
            children={"Football Referee"}
            className="button column"
          />
        </div>
      </div>
    </div>

    <script src="https://apps.elfsight.com/p/platform.js" defer></script>
    <div
      style={{ backgroundColor: `black` }}
      className="elfsight-app-5ba5ff06-d600-402e-ada0-d8bfe77b47ba"
    ></div>

    <Section
      id="surf"
      header="Surfing Coach"
      text="I'm a qualified surf coach, having taught across Europe."
      image="icon"
      link="page-2/"
      style={{ backgroundColor: `#020326` }}
    />

    <Section
      right
      id="massage"
      header="Sports Massage"
      text="<Insert info>"
      image="blank"
      style={{ backgroundColor: `grey` }}
    />

    <Section
      id="tutor"
      header="Tutoring"
      text="With over four years' experience tutoring online..."
      image="blank"
    />

    <Section
      right
      id="football"
      header="Football Referee & Coach"
      text="I am good at blowing whistles."
      image="blank"
      style={{ backgroundColor: `#133015` }}
    />

    <div style={{ height: `50vh` }} />
  </Layout>
)

export default IndexPage

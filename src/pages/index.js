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

    <Section id="instagram" color="white">
      <script src="https://apps.elfsight.com/p/platform.js" defer></script>
      <div className="elfsight-app-5ba5ff06-d600-402e-ada0-d8bfe77b47ba"></div>
    </Section>

    <Section
      id="surf"
      header="Surfing Coach"
      text="I'm a qualified surf coach, having taught across Europe."
      imageFile="icon"
      link="page-2/"
      color="#020326"
    />

    <Section
      right
      id="massage"
      header="Sports Massage"
      text="<Insert info>"
      imageFile="blank"
      color="grey"
    />

    <Section
      id="tutor"
      header="Tutoring"
      text="With over four years' experience tutoring online..."
      imageFile="blank"
    />

    <Section
      right
      id="football"
      header="Football Referee & Coach"
      text="I am good at blowing whistles."
      imageFile="blank"
      color="#133015"
    />

    <div style={{ height: `100vh` }} />
  </Layout>
)

export default IndexPage

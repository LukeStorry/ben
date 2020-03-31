import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import IntroSection from "../components/IntroSection"
import Section from "../components/Section"
import ContactForm from "../components/ContactForm"
import { Link } from "gatsby"
import BackgroundImage from "../components/BackgroundImage"

const IndexPage = () => (
  <Layout>
    <SEO title={"Home"} />

    <BackgroundImage filename="surf-banner" />
    <IntroSection />

    <Section shrinkable id="instagram" color="white">
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

    <ContactForm />

    <div
      style={{
        textAlign: `center`,
        zIndex: 5,
        position: `relative`,
        padding: `10rem`,
      }}
    >
      <Link to="/#intro" className="button">
        Back to top
      </Link>
    </div>
  </Layout>
)

export default IndexPage

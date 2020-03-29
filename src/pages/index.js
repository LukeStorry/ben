import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BackgroundImage from "../components/BackgroundImage"
import Section from "../components/Section"

const IndexPage = () => (
  <Layout style={{ background: "black", color: "white" }}>
    <SEO title={"Home"} />
    <BackgroundImage filename="surf-banner" style={{textAlign:`center`}}>
      <h1>Hi</h1>
    <p>Welcome to your new site.</p>
    <p>Great stuff to come.</p>
    </BackgroundImage>

    <Section header="Surfing Coach" text="Surfing Info ............ .......... .............. ........................ ....................."
    image="icon" link="page-2/"/>

    <Section header="Sports Massage" text="Sports Massage Info ............ .......... .............. ........................ ....................."
    image="blank" style={{backgroundColor:`grey`}}/>

    <Section header="Tutoring" text="Tutoring Info ............ .......... .............. ........................ ....................."
    image="blank"/>

    <Section header="Football Referee & Coach" text="Football Referee Info ............ .......... .............. Football Coaching Info ........................ ....................."
    image="blank" style={{backgroundColor:`lightgrey`}}/>

  </Layout>
)

export default IndexPage

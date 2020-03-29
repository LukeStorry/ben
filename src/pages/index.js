import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BackgroundImage from "../components/BackgroundImage"
import Section from "../components/Section"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title={"Home"} />
    <BackgroundImage
      filename="surf-banner"
      style={{
        textAlign: `center`,
        position: `sticky`,
        top: 0,
        color: "white",
        zIndex: 1,
      }}
    >
      <p>
        Passionate surfer, student and part time sports coach at Loughborough
        University.
      </p>
      <Link
        class="button"
        style={{ color: "white", padding: `0 1rem 0 1rem`, margin: `1rem` }}
        to="#surf"
      >
        Surf Coach
      </Link>
      <Link
        class="button"
        style={{ color: "white", padding: `0 1rem 0 1rem`, margin: `1rem` }}
        to="#massage"
      >
        Sports Massage
      </Link>
      <Link
        class="button"
        style={{ color: "white", padding: `0 1rem 0 1rem`, margin: `1rem` }}
        to="#tutor"
      >
        Tutoring
      </Link>
      <Link
        class="button"
        style={{ color: "white", padding: `0 1rem 0 1rem`, margin: `1rem` }}
        to="#football"
      >
        Football Referee
      </Link>
    </BackgroundImage>

    <Section
      id="surf"
      header="Surfing Coach"
      text="Surfing Info ............ .......... .............. ........................ ....................."
      image="icon"
      link="page-2/"
    />

    <Section
      right
      id="massage"
      header="Sports Massage"
      text="Sports Massage Info ............ .......... .............. ........................ ....................."
      image="blank"
      style={{ backgroundColor: `grey` }}
    />

    <Section
      id="tutor"
      header="Tutoring"
      text="Tutoring Info ............ .......... .............. ........................ ....................."
      image="blank"
    />

    <Section
      right
      id="football"
      header="Football Referee & Coach"
      text="Football Referee Info ............ .......... .............. Football Coaching Info ........................ ....................."
      image="blank"
      style={{ backgroundColor: `lightgrey` }}
    />
  </Layout>
)

export default IndexPage

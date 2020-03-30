import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BackgroundImage from "../components/BackgroundImage"
import Section from "../components/Section"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title={"Home"} />
    <BackgroundImage filename="surf-banner">
      {/* style={{ position: `sticky`, top: 0, zIndex: 1 }} */}
      <h5 style={{ textAlign: `center`, color: "white", padding: `3rem` }}>
        Passionate surfer, student and part time sports coach at Loughborough
        University.
      </h5>
      <div class="row container">
        <div class="three columns">
          <Link to="#surf" children={"Surf Coach"} class="button column" />
        </div>
        <div class="three columns">
          <Link
            to="#massage"
            children={"Sports Massage"}
            class="button column"
          />
        </div>
        <div class="three columns">
          <Link to="#tutor" children={"Tutoring"} class="button column" />
        </div>
        <div class="three columns">
          <Link
            to="#football"
            children={"Football Referee"}
            class="button column"
          />
        </div>
      </div>
    </BackgroundImage>

    <script src="https://apps.elfsight.com/p/platform.js" defer></script>
    <div class="elfsight-app-5ba5ff06-d600-402e-ada0-d8bfe77b47ba"></div>

    <Section
      id="surf"
      header="Surfing Coach"
      text="Surfing Info ............ .......... .............. ........................ .................... .............. ........................ .......................... .............. ........................ ....................."
      image="icon"
      link="page-2/"
      style={{ backgroundColor: `#020326` }}
    />

    <Section
      right
      id="massage"
      header="Sports Massage"
      text="Sports Massage Info ............ .......... ........................ ...................... .............. ........................ ............... ........................ ............. ........................ ....................."
      image="blank"
      style={{ backgroundColor: `grey` }}
    />

    <Section
      id="tutor"
      header="Tutoring"
      text="Tutoring Info ............ .......... .............. .......... .............. ........................ ....................... .............. ........................ ..................................... ....................."
      image="blank"
    />

    <Section
      right
      id="football"
      header="Football Referee & Coach"
      text="Football Referee Info ............ .......... .................. .............. ........................ ................... Football Coaching Info ............ .............. ........................ ................................... ....................."
      image="blank"
      style={{ backgroundColor: `#133015` }}
    />

    <div style={{ height: `30rem`, backgroundColor: `black` }}></div>
  </Layout>
)

export default IndexPage

import React from "react"
import BackgroundImage from "./BackgroundImage"
import Section from "./Section"
import { Link } from "gatsby"

export default () => (
  <Section id="intro" color="transparent">
    <BackgroundImage filename="surf-banner" />

    <h5
      style={{
        textAlign: `center`,
        color: "white",
        padding: `6rem 3rem`,
        zIndex: 3,
      }}
    >
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

    {/* <div className="row container">
      <div className="two columns button" style={{ opacity: 0 }} />
      <div className="two columns offset-by-three">
        <Link to="/#contact" children={"Contact"} className="button column" />
      </div>
    </div> */}
  </Section>
)

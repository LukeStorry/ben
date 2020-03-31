import React from "react"
import Section from "./Section"
import { Link } from "gatsby"

export default () => (
  <Section id="intro" color="transparent" style={{ height: `100vh` }}>
    <h5
      style={{
        textAlign: `center`,
        color: "white",
        padding: `0 3rem`,
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
      <div className="two columns offset-by-five">
        <Link to="/#contact" children={"Contact"} className="button column" />
      </div>
    </div> */}
  </Section>
)

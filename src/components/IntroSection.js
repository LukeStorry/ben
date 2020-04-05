import React from "react"
import Section from "./Section"
import { Link } from "gatsby"

export default () => (
  <Section id="intro" color="transparent" fullHeight>
    <h5 className="px-8 text-center -mt-10">
      Passionate surfer, student and part time sports coach at Loughborough
      University.
    </h5>

    <div className="grid lg:grid-cols-4 gap-4 text-center">
      <Link to="/#surf" className="button">
        Surf Coach
      </Link>
      <Link to="/#massage" className="button">
        Sports Massage
      </Link>
      <Link to="/#tutor" className="button">
        Tutoring
      </Link>
      <Link to="/#football" className="button">
        Football Referee
      </Link>
    </div>
  </Section>
)

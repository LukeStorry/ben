import React from "react"
import Section from "./Section"
import { Link } from "gatsby"

export default () => (
  <Section id="intro" color="transparent" fullHeight>
    <h5 className="px-8 text-center -mt-10">
      Passionate surfer, student and part time sports coach at Loughborough
      University.
    </h5>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center px-6 w-full sm:w-auto">
      <Link to="/#surf" className="button px-8">
        Surf Coach
      </Link>
      <Link to="/#massage" className="button px-8">
        Sports Massage
      </Link>
      <Link to="/#tutor" className="button px-8">
        Tutoring
      </Link>
      <Link to="/#football" className="button px-8">
        Football Referee
      </Link>
    </div>
  </Section>
)

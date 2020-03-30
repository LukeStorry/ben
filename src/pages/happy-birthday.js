import React from "react"
import SEO from "../components/SEO"
import { Link } from "gatsby"

import "../css/normalize.css"
import "../css/skeleton.css"

const HappyBirthday = () => (
  <div
    style={{
      backgroundColor: "black",
      height: `100vh`,
      width: `100vw`,
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      justifyContent: `space-evenly`,
      margin: 0,
    }}
  >
    <SEO title="Happy Birthday" />
    <img
      src="https://i.pinimg.com/originals/75/8c/e3/758ce3d464d9d7f436097553bb36b84a.gif"
      alt="Happy 21st Birthday!!!"
    />

    <Link
      to="/"
      children={"Go see your present"}
      className="button"
      style={{
        backgroundColor: "darkorange",
      }}
    />
  </div>
)

export default HappyBirthday

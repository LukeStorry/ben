import React from "react"
import Section from "../components/Section"

const Contact = props => (
  <Section id="contact" style={{ padding: `3rem 0`, color: `black` }}>
    <h2>Contact</h2>

    <form
      name="contact"
      method="post"
      action="#"
      data-netlify="true"
      className="container"
    >
      <input type="hidden" name="form-name" value="contact" />

      <div className="row container">
        <div className="five columns">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
        </div>

        <div className="six columns offset-by-one">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" required />
        </div>
      </div>

      <div className="container">
        <label htmlFor="message">Message</label>
        <textarea
          style={{ height: `15rem` }}
          name="message"
          id="message"
          required
          placeholder="Hi Ben …"
        ></textarea>
      </div>

      <div style={{ textAlign: `center` }}>
        <input type="submit" value="Send" className="button" />
      </div>
    </form>
  </Section>
)

export default Contact

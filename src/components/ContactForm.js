import React from "react"
import Section from "../components/Section"

const Contact = props => (
  <Section id="contact" color="black">
    <h2>Contact</h2>

    <form
      name="contact"
      method="post"
      action="#"
      data-netlify="true"
      className=""
    >
      <input type="hidden" name="form-name" value="contact" />

      <div className="container mx-auto">
        <div className="">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            style={{ backgroundColor: `grey` }}
          />
        </div>

        <div className="container">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" required />
        </div>
      </div>

      <div className="container mx-auto">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          required
          placeholder="Hi Ben …"
          className="h-20"
        ></textarea>
      </div>

      <div className="container mx-auto">
        <input type="submit" value="Send" className="button" />
      </div>
    </form>
  </Section>
)

export default Contact

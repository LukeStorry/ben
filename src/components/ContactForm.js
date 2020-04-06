import React from "react"
import Section from "../components/Section"

const Contact = props => (
  <Section id="contact" color="black" header="Contact">
    <form
      name="contact"
      method="post"
      action="#"
      data-netlify="true"
      className="px-4 mb-12 mt-0 w-full sm:w-auto"
    >
      <input type="hidden" name="form-name" value="contact" />

      <div className="grid sm:grid-cols-2 gap-4 mx-auto mb-4">
        <div>
          <label htmlFor="name" className="block text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="input-box"
            type="text"
            name="name"
            id="name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="input-box"
            type="text"
            name="email"
            id="email"
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-bold mb-2">
          Message
        </label>
        <textarea
          className="input-box h-32 min-w-full"
          name="message"
          id="message"
          required
          placeholder="Hi Ben …"
        ></textarea>
      </div>

      <div className="w-full text-center my-8">
        <input
          type="submit"
          value="Send"
          className="button button-inverse mx-auto"
        />
      </div>
    </form>
  </Section>
)

export default Contact

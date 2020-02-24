import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Hi from the contact page</h1>
    <p>Welcome to contact page</p>
    <p>
      The best way to reach me would be via{" "}
      <a
        href="https://twitter.com/APeliza"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
    </p>
    <Link to="/about/">Go to about page</Link>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage

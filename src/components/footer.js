import React from "react"

import footerStyles from "./footer.module.scss"

const Footer = ({ siteAuthor }) => {
  return (
    <footer className={footerStyles.footer}>
      <p>Created by {siteAuthor}, © 2020</p>
    </footer>
  )
}

export default Footer

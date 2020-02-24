import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = ({ siteTitle }) => {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link to="/" className={headerStyles.title}>
          {siteTitle}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.navItem}>
            <Link to="/" activeClassName={headerStyles.activeNavItem}>
              Home
            </Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link to="/about" activeClassName={headerStyles.activeNavItem}>
              About
            </Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link to="/contact" activeClassName={headerStyles.activeNavItem}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

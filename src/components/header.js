import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = ({ siteTitle }) => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.wrapper}>
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
              <Link to="/blog" activeClassName={headerStyles.activeNavItem}>
                Blog
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
      </div>
    </header>
  )
}

export default Header

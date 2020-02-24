import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#223344`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>Andrew Peliza</h1>
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              About
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

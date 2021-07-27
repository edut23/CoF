import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#303A78`,
      mixBlendMode: `normal`,
      border: `4px solid #000000`,
      boxSizing: `border-box`,
      position: `fixed`,
      left: `0%`,
      right: `0%`,
      top: `0%`,
      bottom: `0%`,
      maxHeight: 80,
      zIndex: 8,
    }}
  >
    <nav
      style={{
        color: `#FFFFFF`,
        fontFamily: `arial`,
        padding: `18px 60px`,
        float: `left`,
        fontSize: `42px`,
        fontWeight: `bold`,
        webkitTextStrokeWidth: `2.7px`,
        webkitTextStrokeColor: `#000000`,
      }}
    >
      <ul style={{
        listStyle: `none`,
        float: `left`,
      }}>
        <li style={{
        position: `relative`,
        float: `left`,
        padding: `0px 105px`
      }}>
          <a>Sobre nós</a>
        </li>
        <li style={{
        position: `relative`,
        float: `left`,
        padding: `0px 105px`
      }}>
          <a>Cardápio</a>
        </li>
        <li style={{
        position: `relative`,
        float: `left`,
        padding: `0px 105px`
      }}>
          <a>Peça já</a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

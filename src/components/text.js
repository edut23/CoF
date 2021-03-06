/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Text = ({ children }) => {

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          width: `100%`,
          height: 745,
          padding: `0 1.0875rem 1.45rem`,
          backgroundColor: `#7BB41C`,
          border: `4px solid #000000`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Text

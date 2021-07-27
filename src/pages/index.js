import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Text from "../components/text"

const IndexPage = () => (
  <main>
  <Layout style={{
    backgroundImage: `fundo.jpg`
  }}><div>
    <div style={{ padding: `130px 20px`,}}>
    <StaticImage
      src="../images/PNG.png"
      width={808}
      height={430}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      pos
      style={{ position: `relative`,}}
    />
    </div>
    <StaticImage
      src="../images/map-location.png"
      width={50}
      height={50}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      pos
      style={{ position: `relative`}}
    />
    <h2 style={{
        color: `#FFFFFF`,
        fontFamily: `arial`,
        padding: `0px 30px`,
        fontSize: `38px`,
        fontWeight: `bold`,
        webkitTextStrokeWidth: `2.7px`,
        webkitTextStrokeColor: `#000000`,
        float: `right`
      }}>
      Rua Alfredo Lopes 1717 - CEP 13560460
    </h2>
    </div>
  </Layout>
  <Text/>
  </main>
)

export default IndexPage
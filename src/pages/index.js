import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Text from "../components/text"
import Text2 from "../components/text2"

const IndexPage = () => (
  <main>
  <Layout style={{
    backgroundImage: `fundo.jpg`
  }}>
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
          <a href="#section1" style={{textDecoration: `none`, 
          color: `inherit`, 
          webkitTextStrokeWidth: `2.7px`, 
          webkitTextStrokeColor: `#000000`}}>Sobre nós</a>
        </li>
        <li style={{
        position: `relative`,
        float: `left`,
        padding: `0px 105px`
      }}>
          <a href="#section2" style={{textDecoration: `none`, 
          color: `inherit`, 
          webkitTextStrokeWidth: `2.7px`, 
          webkitTextStrokeColor: `#000000`}}>Cardápio</a>
        </li>
        <li style={{
        position: `relative`,
        float: `left`,
        padding: `0px 105px`
      }}>
          <a href="#section3" style={{textDecoration: `none`, 
          color: `inherit`, 
          webkitTextStrokeWidth: `2.7px`, 
          webkitTextStrokeColor: `#000000`}}>Peça já</a>
        </li>
      </ul>
    </nav>
  </header>
    <div>
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
  <div id="section1"/>
  <Text>
    <h1 style={{
        color: `#FFFFFF`,
        fontFamily: `arial`,
        padding: `40px 30px`,
        fontSize: `64px`,
        fontWeight: `bold`,
        webkitTextStrokeWidth: `2.7px`,
        webkitTextStrokeColor: `#000000`,
        float: `left`,
        marginTop: `40px`
      }}>Nossos valores são...</h1>
      <br/>
      <ul style={{
        color: `#FFFFFF`,
        fontFamily: `arial`,
        padding: `0px 30px`,
        fontSize: `42px`,
        fontWeight: `bold`,
        webkitTextStrokeWidth: `2px`,
        webkitTextStrokeColor: `#000000`,
        float: `left`,
      }}>
        <li>
          Comida vegana saudável e fresca:
        não importa se você começou ontem no veganismo ou já está no caminho a tempos, temos algo que vai agradar o seu paladar.
        </li>
        <br/>
        <li>
          Produtores locais e orgânicos: trabalhamos com produtos de agricultura familiar e incentivamos a produção de comida local.
        </li>
        <br/>
        <li>
          Acessível a todos: comida vegana não precisa ser cara e inacessível, o Contra o Filé tenta democratizar o acesso a esse tipo de produto.
        </li>
      </ul>
  </Text>
  <div id="section2"/>
  <Text2>
  <h1 style={{
        color: `#FFFFFF`,
        fontFamily: `arial`,
        padding: `40px 30px`,
        fontSize: `64px`,
        fontWeight: `bold`,
        webkitTextStrokeWidth: `2.7px`,
        webkitTextStrokeColor: `#000000`,
        float: `left`,
        marginTop: `40px`
      }}>Delícias da casa:</h1>
      <br/>
      <ul style={{
        color: `#FFFFFF`,
        fontFamily: `arial`,
        padding: `200px 30px`,
        fontSize: `38px`,
        fontWeight: `bold`,
        webkitTextStrokeWidth: `2px`,
        webkitTextStrokeColor: `#000000`,
        alignItems: `left`
      }}>
        <li>
          Abobrinha Recheada. 
        </li>
        <li>
          Arroz com Lentilhas. 
        </li>
        <li>
          Charuto de Repolho.
        </li>
        <li>
          Chilli Vegano.
        </li>
        <li>
          Guioza Vegano.
        </li>
        <li>
          Koftas de repolho.
        </li>
        <li>
          Kibe de Berinjela.
        </li>
        <li>
          Curry de Abóbora.
        </li>
      </ul>
  </Text2>
  <div id="section3"/>
  <Text>
  <h1 style={{
        color: `#FFFFFF`,
        fontFamily: `arial`,
        padding: `40px 30px`,
        fontSize: `64px`,
        fontWeight: `bold`,
        webkitTextStrokeWidth: `2.7px`,
        webkitTextStrokeColor: `#000000`,
        float: `left`,
        marginTop: `40px`
      }}>Não perca tempo e peça já!</h1>
      <br/>
      <ul style={{
        color: `#FFFFFF`,
        fontFamily: `arial`,
        padding: `0px 30px`,
        fontSize: `38px`,
        fontWeight: `bold`,
        webkitTextStrokeWidth: `2px`,
        webkitTextStrokeColor: `#000000`,
        alignItems: `left`,
        listStyle: `none`,
      }}>
        <li style={{marginTop: `180px`, padding: `40px 0px`} }>
          Whatsapp: (16) 98765-1234 
        </li>
        <li style={{padding: `40px 0px`}}>
          Horário de funcionamento: 11:00 -  15:00 de Seg a Sáb. 
        </li>
        <li style={{padding: `40px 0px`}}>
          Muito Importante Salientar: Devido a pandemia temos atendido apenas por delivery, mas quando normaliza voltaremos a ter na loja presencial.
        </li>
      </ul>
  </Text>
  </main>
)

export default IndexPage
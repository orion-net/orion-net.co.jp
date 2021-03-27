import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import "../../static/style.css"
import { Helmet } from "react-helmet"
import { messages } from "../messages"
import { LinkNav } from "./LinkNav"
import { Sidebar } from "./Sidebar"

const Head = ({ pageTitle }) => (
  <Helmet>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
    <meta
      name="description"
      content="オリオンは川崎市高津区久末の美容院・ヘアーサロンです。"
    />
    <title>{`オリオン美容室 | ${pageTitle}`}</title>
  </Helmet>
)

const Header = () => (
  <header
    id="masthead"
    className="site-header sp-part-top sp-header2"
    role="banner"
  >
    <div id="masthead-inner" className="sp-part-top sp-header-inner">
      <div id="sp-site-branding2-1" className="sp-part-top sp-site-branding2">
        <div className="site-title sp-part-top sp-site-title" />
        <div
          className="extra sp-part-top sp-site-branding-extra"
          style={{ minHeight: "20px" }}
          id="sp-site-branding-extra-1"
        />
      </div>
    </div>
  </header>
)

const Footer = () => (
  <footer
    id="colophon"
    className="site-footer sp-part-top sp-footer2"
    role="contentinfo"
  >
    <div id="colophon-inner" className="sp-part-top sp-footer-inner">
      <nav
        id="sp-site-navigation-2"
        className="navigation-main sp-part-top sp-site-navigation minimal"
        role="navigation"
      >
        <h1 className="menu-toggle">メニュー</h1>
        <div className="screen-reader-text skip-link">
          <a title="コンテンツへスキップ" href="#content">
            コンテンツへスキップ
          </a>
        </div>
        <ul id="menu-mainnav">
          <li className="menu-item">
            <Link to="/privacy">プライバシーポリシー</Link>
          </li>
        </ul>
      </nav>
      <div id="sp-block-container-1" className="sp-part-top sp-block-container">
        <p className="copyright paragraph">{messages.copyright}</p>
      </div>
    </div>
  </footer>
)

export const Layout = ({ children, pageTitle, currentNav }) => (
  <>
    <Head pageTitle={pageTitle} />
    <div id="page" className="site">
      <Header />
      <div id="main" className="site-main sp-part-top sp-main">
        <div id="contenthead" className="sp-part-top sp-content-header">
          <Link to="/">
            <StaticImage
              id="sp-image-1"
              alt="sp-image-1"
              src="../../static/img/top3.png"
              layout="fixed"
              width={800}
              height={400}
              className="sp-part-top sp-image"
            />
          </Link>
          <nav
            id="sp-site-navigation-1"
            className="navigation-main button-menu sp-part-top sp-site-navigation horizontal"
            role="navigation"
          >
            <span className="menu-toggle" />
            <LinkNav {...currentNav} />
          </nav>
          <div id="breadcrumb-list" className="sp-part-top sp-bread-crumb">
            <div>
              <Link to="/">トップ</Link>
            </div>
            <div>›</div>
            {pageTitle ? <div>{pageTitle}</div> : <></>}
          </div>
        </div>
        <div id="main-inner">
          {children}
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  </>
)

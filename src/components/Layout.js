import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { LinkNav } from "./LinkNav"
import { Sidebar } from "./Sidebar"
import "../../static/style.scss"
import { Footer } from "./Footer"

const WithHelmet = ({ children, pageTitle }) => (
  <>
    <Helmet>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta
        name="description"
        content="オリオンは川崎市高津区久末の美容院・ヘアーサロンです。"
      />
      <title>{`オリオン美容室 | ${pageTitle}`}</title>
    </Helmet>
    {children}
  </>
)

const useHamburger = initial => {
  const [isOpened, setIsOpened] = React.useState(initial)

  return {
    toggle: () => setIsOpened(!isOpened),
    close: () => setIsOpened(false),
    class: isOpened ? "opened" : "closed",
  }
}

export const Layout = ({ children, pageTitle, currentNav }) => {
  const hamburger = useHamburger(false)

  return (
    <WithHelmet pageTitle={pageTitle}>
      <LinkNav {...currentNav} hamburger={hamburger} />
      <div className="layout">
        <div onClick={hamburger.close}>
          <div className="logo">
            <Link to="/">
              <img
                alt="オリオン美容室のトップ"
                src="/img/top3.png"
                width="707px"
                height="353px"
              />
            </Link>
          </div>
          <div className="article-wrapper">{children}</div>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </WithHelmet>
  )
}

import React from "react"
import { Sidebar } from "../components/Sidebar"
import { Link } from "gatsby"
import { LinkNav } from "../components/LinkNav"
import "../../static/style.css"
import { Layout } from "../components/Layout"

const Main = () => (
  <Layout>
    <div id="main" className="site-main sp-part-top sp-main">
      <div id="contenthead" className="sp-part-top sp-content-header">
        <a style={{ display: "block" }}>
          <img
            id="sp-image-1"
            src="/img/top3.gif"
            className="sp-part-top sp-image"
          />
        </a>
        <nav
          id="sp-site-navigation-1"
          className="navigation-main button-menu sp-part-top sp-site-navigation horizontal"
          role="navigation"
        >
          <h1 className="menu-toggle">メニュー</h1>
          <div className="screen-reader-text skip-link">
            <a title="コンテンツへスキップ" href="#content">
              コンテンツへスキップ
            </a>
          </div>
          <LinkNav concept1 />
        </nav>
        <div id="breadcrumb-list" className="sp-part-top sp-bread-crumb">
          <div>
            <Link to="/">トップ</Link>
          </div>
          <div>›</div>
          <div>成人式・七五三</div>
        </div>
      </div>
      <div id="main-inner">
        <div id="primary" className="content-area">
          <div
            id="content"
            className="site-content sp-part-top sp-content page-concept1"
            role="main"
          >
            <h1>ページが見つかりません！</h1>
            <article>
              <a href="/">トップページへ戻る</a>
            </article>
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  </Layout>
)

export default Main

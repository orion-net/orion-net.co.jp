import React from "react"
import { Sidebar } from '../components/Sidebar'
import { copyright } from '../messages/copyright'
import { Link } from 'gatsby'
import { LinkNav } from '../components/LinkNav'
import '../../static/style.css'

export default () => (
  <div id="page" className="site">
    <header id="masthead" className="site-header sp-part-top sp-header2" role="banner">
      <div id="masthead-inner" className="sp-part-top sp-header-inner">
        <div id="sp-site-branding2-1" className="sp-part-top sp-site-branding2">
          <h1 className="site-title sp-part-top sp-site-title" id=""><a href="index.html">ビルダーサロン</a></h1>
          <h2 className="site-description sp-part-top sp-catchphrase" id="">Orionは川崎市高津区久末の美容院・ヘアーサロンです。</h2>
          <div className="extra sp-part-top sp-site-branding-extra" style={{minHeight: "20px"}} id="sp-site-branding-extra-1"></div>
        </div>
      </div>
    </header>
    <div id="main" className="site-main sp-part-top sp-main">
      <div id="contenthead" className="sp-part-top sp-content-header">
        <a style={{display: "block"}}>
          <img id="sp-image-1" src="img/top3.gif" className="sp-part-top sp-image" />
        </a>
        <nav id="sp-site-navigation-1" className="navigation-main button-menu sp-part-top sp-site-navigation horizontal" role="navigation">
          <h1 className="menu-toggle">メニュー</h1>
          <div className="screen-reader-text skip-link"><a title="コンテンツへスキップ" href="#content">コンテンツへスキップ</a></div>
          <LinkNav concept1 />
        </nav>
        <div id="breadcrumb-list" className="sp-part-top sp-bread-crumb">
          <div><Link to="/">トップ</Link></div>
          <div>›</div>
          <div>成人式・七五三</div>
        </div>
      </div>
      <div id="main-inner">
        <div id="primary" className="content-area">
          <div id="content" className="site-content sp-part-top sp-content page-concept1" role="main">
            <h1>ページが見つかりません！</h1>
            <article>
              <a href="/">トップページへ戻る</a>
            </article>
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
    <footer id="colophon" className="site-footer sp-part-top sp-footer2" role="contentinfo">
      <div id="colophon-inner" className="sp-part-top sp-footer-inner">
        <nav id="sp-site-navigation-2" className="navigation-main sp-part-top sp-site-navigation minimal" role="navigation">
          <h1 className="menu-toggle">メニュー</h1>
          <div className="screen-reader-text skip-link"><a title="コンテンツへスキップ" href="#content">コンテンツへスキップ</a></div>
          <ul id="menu-mainnav">
            <li className="menu-item"><Link to="/privacy">プライバシーポリシー</Link></li>
          </ul>
        </nav>
        <div id="sp-block-container-1" className="sp-part-top sp-block-container">
          <p className="copyright paragraph">{ copyright  }</p>
        </div>
      </div>
    </footer>
  </div>
);

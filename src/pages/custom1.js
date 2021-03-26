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
          <img id="sp-image-1" src="/img/top3.gif" className="sp-part-top sp-image" />
        </a>
        <nav id="sp-site-navigation-1" className="navigation-main button-menu sp-part-top sp-site-navigation horizontal" role="navigation">
          <h1 className="menu-toggle">メニュー</h1>
          <div className="screen-reader-text skip-link"><a title="コンテンツへスキップ" href="#content">コンテンツへスキップ</a></div>
          <LinkNav custon1 />
        </nav>
        <div id="breadcrumb-list" className="sp-part-top sp-bread-crumb">
          <div><Link to="/">トップ</Link></div>
          <div>›</div>
          <div>ご予約</div>
        </div>
      </div>
      <div id="main-inner">
        <div id="primary" className="content-area">
          <div id="content" className="site-content sp-part-top sp-content page-custom1" role="main">
            <header id="sp-page-title-9" className="entry-header sp-part-top sp-page-title">
              <h1 className="entry-title">ご予約</h1>
            </header>
            <article>
              <div id="page-content" className="sp-part-top sp-block-container">
                <p className="large paragraph">　</p>
                <p className="large paragraph">ご予約はお電話でお願い致します 。<br /></p>
                <p className="large paragraph"> </p>
                <p className="large paragraph">　　TEL・FAX 　　 <strong className="strong character">044-766-1610</strong></p>
                <p className="large paragraph"><br />
                　　ﾌﾘｰﾀﾞｲﾔﾙ　 　　<strong className="character">0800-800-1612</strong>
                </p>
              </div>
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

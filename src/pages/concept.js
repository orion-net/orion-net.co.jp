import React from "react"
import { Sidebar } from '../components/Sidebar'
import { copyright } from '../messages/copyright'
import { Link } from 'gatsby'
import { LinkNav } from '../components/LinkNav'
import '../../static/style.css'

const Header = () => (
  <header id="masthead" className="site-header sp-part-top sp-header2" role="banner">
    <div id="masthead-inner" className="sp-part-top sp-header-inner">
      <div id="sp-site-branding2-1" className="sp-part-top sp-site-branding2">
        <h1 className="site-title sp-part-top sp-site-title" id=""><a href="index.html">ビルダーサロン</a></h1>
        <h2 className="site-description sp-part-top sp-catchphrase" id="">Orionは川崎市高津区久末の美容院・ヘアーサロンです。</h2>
        <div className="extra sp-part-top sp-site-branding-extra" style={{minHeight: "20px"}} id="sp-site-branding-extra-1" />
      </div>
    </div>
  </header>
);

const Footer = () => (
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
);

export default () => (
  <div id="page" className="site">

    <Header />

    <div id="main" className="site-main sp-part-top sp-main">
      <div id="contenthead" className="sp-part-top sp-content-header">
        <a style={{display: "block"}}>
          <img id="sp-image-1" src="/img/top3.gif" className="sp-part-top sp-image" />
        </a>
        <nav id="sp-site-navigation-1" className="navigation-main button-menu sp-part-top sp-site-navigation horizontal" role="navigation">
          <h1 className="menu-toggle">メニュー</h1>
          <div className="screen-reader-text skip-link">
            <a title="コンテンツへスキップ" href="#content">コンテンツへスキップ</a>
          </div>
          <LinkNav concept />
        </nav>

        <div id="breadcrumb-list" className="sp-part-top sp-bread-crumb">
          <div><Link to="/">トップ</Link></div>
          <div>›</div>
          <div>サロン紹介</div>
        </div>

        <div id="main-inner">
          <div id="primary" className="content-area">
            <div id="content" className="site-content sp-part-top sp-content page-concept" role="main">
              <header id="sp-page-title-2" className="entry-header sp-part-top sp-page-title">
                <h1 className="entry-title">サロン紹介</h1>
              </header>
              <article>
                <div id="page-content" className="sp-part-top sp-block-container">
                  <h3 className="paragraph">スタッフ</h3>
                  <p className="large paragraph"><b className="character">マネージャー：　武藤　夏代</b></p>
                  <p className="large paragraph"> </p>
                  <p className="paragraph"> </p>
                  <p className="large paragraph"> </p>
                  ○スタッフ紹介
                  <p className="large paragraph"> </p><a style={{display: "block"}}><img id="sp-image-8" src="/img/1496900727362.jpg" className="sp-part-top sp-image" /></a><br />
                  <b className="character">武藤　大亮</b>
                  <p className="paragraph">　</p><a style={{display: "block"}}><img id="sp-image-9" src="/img/1496901447498.jpg" className="sp-part-top sp-image" /></a><br />
                  <b className="character">武藤　圭佑</b>
                  <p className="paragraph">　　</p>
                  <h3 className="paragraph">サロン</h3><a style={{display: "block"}}><img id="sp-image-10" src="/img/securedownload3.jpg" className="sp-part-top sp-image" /></a><a style={{display: "block"}}><img id="sp-image-11" src="/img/51.jpg" className="sp-part-top sp-image" /></a><br />
                  白を基調とした落ち着いた店内は、おくつろぎいただける空間です。 <br />
                  お客さまの髪質とご要望に合わせて、スタイルをご提案します。<br /><br /><a style={{display: "block"}}><img id="sp-image-12" src="/img/2.jpg" className="sp-part-top sp-image" /></a>
                  <p className="paragraph"> </p><br />
                  <a style={{display: "block"}}><img id="sp-image-13" src="/img/4.jpg" className="sp-part-top sp-image" /></a><br />
                  180度にたおれるイスがございますので、ゆったりと施術がお受けになれます。
                  <hr />
                  <p className="paragraph"> </p>
                  <p className="paragraph"> </p>
                  <p className="paragraph"> </p>
                </div>
              </article>
            </div>
          </div>

        <Sidebar />

        </div>
      </div>
      <Footer />
    </div>
  </div>
);

import React from "react"
import { Sidebar } from '../components/Sidebar'
import { copyright } from '../messages/copyright'
import { Link } from 'gatsby'
import { LinkNav } from '../components/LinkNav'
import '../../static/style.css'

export default () => (
  <div id="page" class="site">
    <header id="masthead" class="site-header sp-part-top sp-header2" role="banner">
      <div id="masthead-inner" class="sp-part-top sp-header-inner">
        <div id="sp-site-branding2-1" class="sp-part-top sp-site-branding2">
          <h1 class="site-title sp-part-top sp-site-title" id=""><a href="index.html">ビルダーサロン</a></h1>
          <h2 class="site-description sp-part-top sp-catchphrase" id="">Orionは川崎市高津区久末の美容院・ヘアーサロンです。</h2>
          <div class="extra sp-part-top sp-site-branding-extra" style={{minHeight: "20px"}} id="sp-site-branding-extra-1"></div>
        </div>
      </div>
    </header>
    <div id="main" class="site-main sp-part-top sp-main">
      <div id="contenthead" class="sp-part-top sp-content-header">
        <a style={{display: "block"}}>
          <img id="sp-image-1" src="img/top3.gif" class="sp-part-top sp-image" />
        </a>
        <nav id="sp-site-navigation-1" class="navigation-main button-menu sp-part-top sp-site-navigation horizontal" role="navigation">
          <h1 class="menu-toggle">メニュー</h1>
          <div class="screen-reader-text skip-link"><a title="コンテンツへスキップ" href="#content">コンテンツへスキップ</a></div>
          <LinkNav custom3 />
        </nav>
        <div id="breadcrumb-list" class="sp-part-top sp-bread-crumb">
          <div><Link to="/">トップ</Link></div>
          <div>›</div>
          <div>成人式・スナップ集</div>
        </div>
      </div>
      <div id="main-inner">
        <div id="primary" class="content-area">
          <div id="content" class="site-content sp-part-top sp-content page-custom3" role="main">
            <header id="sp-page-title-12" class="entry-header sp-part-top sp-page-title">
              <h1 class="entry-title">成人式・スナップ集</h1>
            </header>
            <div id="sp-block-container-2" class="sp-part-top sp-block-container">
              <p class="large paragraph"><b class="character" style={{color : "#9e140c"}}>※転載厳禁</b></p>
            </div><a style={{display: "block"}}><img id="sp-image-35" src="img/image56.jpg" class="sp-part-top sp-image"/></a><a style={{display: "block"}}><img id="sp-image-36" src="img/image57.jpg" class="sp-part-top sp-image"/></a>
            <article>
              <div id="page-content" class="sp-part-top sp-block-container"><a style={{display: "block"}}><img id="sp-image-37" src="img/image50.jpg" class="sp-part-top sp-image"/></a>
              </div>
            </article><a style={{display: "block"}}><img id="sp-image-38" src="img/image51.jpg" class="sp-part-top sp-image"/></a><a style={{display: "block"}}><img id="sp-image-39" src="img/image52.jpg" class="sp-part-top sp-image"/></a><a style={{display: "block"}}><img id="sp-image-40" src="img/collage_photocat18.jpg" class="sp-part-top sp-image"/></a><a style={{display: "block"}}><img id="sp-image-41" src="img/image53.jpg" class="sp-part-top sp-image"/></a><a style={{display: "block"}}><img id="sp-image-42" src="img/image58.jpg" class="sp-part-top sp-image"/></a><a style={{display: "block"}}><img id="sp-image-43" src="img/image59.jpg" class="sp-part-top sp-image"/></a>
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
    <footer id="colophon" class="site-footer sp-part-top sp-footer2" role="contentinfo">
      <div id="colophon-inner" class="sp-part-top sp-footer-inner">
        <nav id="sp-site-navigation-2" class="navigation-main sp-part-top sp-site-navigation minimal" role="navigation">
          <h1 class="menu-toggle">メニュー</h1>
          <div class="screen-reader-text skip-link"><a title="コンテンツへスキップ" href="#content">コンテンツへスキップ</a></div>
          <ul id="menu-mainnav">
            <li class="menu-item"><Link to="/privacy">プライバシーポリシー</Link></li>
          </ul>
        </nav>
        <div id="sp-block-container-1" class="sp-part-top sp-block-container">
          <p class="copyright paragraph">{ copyright  }</p>
        </div>
      </div>
    </footer>
  </div>
);

import React from "react"
import { Link } from 'gatsby'
import { LinkNav } from '../components/LinkNav'
import '../../static/style.css'

const Header = () => (
  <header id="masthead" class="site-header sp-part-top sp-header2" role="banner">
    <div id="masthead-inner" class="sp-part-top sp-header-inner">
      <div id="sp-site-branding2-1" class="sp-part-top sp-site-branding2">
        <h1 class="site-title sp-part-top sp-site-title" id=""><a href="index.html">ビルダーサロン</a></h1>
        <h2 class="site-description sp-part-top sp-catchphrase" id="">Orionは川崎市高津区久末の美容院・ヘアーサロンです。</h2>
        <div class="extra sp-part-top sp-site-branding-extra" style={{minHeight: "20px"}} id="sp-site-branding-extra-1" />
      </div>
    </div>
  </header>
);

const Footer = () => (
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
        <p class="copyright paragraph">Copyright &copy; ○○○, All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default () => (
  <div id="page" class="site">

    <Header />

    <div id="main" class="site-main sp-part-top sp-main">
      <div id="contenthead" class="sp-part-top sp-content-header">
        <a style={{display: "block"}}>
          <img id="sp-image-1" src="img/top3.gif" class="sp-part-top sp-image" />
        </a>
        <nav id="sp-site-navigation-1" class="navigation-main button-menu sp-part-top sp-site-navigation horizontal" role="navigation">
          <h1 class="menu-toggle">メニュー</h1>
          <div class="screen-reader-text skip-link">
            <a title="コンテンツへスキップ" href="#content">コンテンツへスキップ</a>
          </div>
          <LinkNav concept />
        </nav>

        <div id="breadcrumb-list" class="sp-part-top sp-bread-crumb">
          <div><Link to="/">トップ</Link></div>
          <div>›</div>
          <div>サロン紹介</div>
        </div>

        <div id="main-inner">
          <div id="primary" class="content-area">
            <div id="content" class="site-content sp-part-top sp-content page-concept" role="main">
              <header id="sp-page-title-2" class="entry-header sp-part-top sp-page-title">
                <h1 class="entry-title">サロン紹介</h1>
              </header>
              <article>
                <div id="page-content" class="sp-part-top sp-block-container">
                  <h3 class="paragraph">スタッフ</h3>
                  <p class="large paragraph"><b class="character">マネージャー：　武藤　夏代</b></p>
                  <p class="large paragraph"> </p>
                  <p class="paragraph"> </p>
                  <p class="large paragraph"> </p>
                  ○スタッフ紹介
                  <p class="large paragraph"> </p><a style={{display: "block"}}><img id="sp-image-8" src="img/1496900727362.jpg" class="sp-part-top sp-image" /></a><br />
                  <b class="character">武藤　大亮</b>
                  <p class="paragraph">　</p><a style={{display: "block"}}><img id="sp-image-9" src="img/1496901447498.jpg" class="sp-part-top sp-image" /></a><br />
                  <b class="character">武藤　圭佑</b>
                  <p class="paragraph">　　</p>
                  <h3 class="paragraph">サロン</h3><a style={{display: "block"}}><img id="sp-image-10" src="img/securedownload3.jpg" class="sp-part-top sp-image" /></a><a style={{display: "block"}}><img id="sp-image-11" src="img/51.jpg" class="sp-part-top sp-image" /></a><br />
                  白を基調とした落ち着いた店内は、おくつろぎいただける空間です。 <br />
                  お客さまの髪質とご要望に合わせて、スタイルをご提案します。<br /><br /><a style={{display: "block"}}><img id="sp-image-12" src="img/2.jpg" class="sp-part-top sp-image" /></a>
                  <p class="paragraph"> </p><br />
                  <a style={{display: "block"}}><img id="sp-image-13" src="img/4.jpg" class="sp-part-top sp-image" /></a><br />
                  180度にたおれるイスがございますので、ゆったりと施術がお受けになれます。
                  <hr />
                  <p class="paragraph"> </p>
                  <p class="paragraph"> </p>
                  <p class="paragraph"> </p>
                </div>
              </article>
            </div>
          </div>

          <div id="sidebar1" class="sp-part-top sp-sidebar">
            <div id="sp-button-1" class="sp-part-top sp-button"><a href="http://ameblo.jp/teamorion/?frm_id=v.mypage-ameblo--myblog--blog">ブログ</a></div>
            <div id="sp-button-2" class="sp-part-top sp-button"><a href="https://www.facebook.com/orionannex.orion">Face Book</a></div>
            <div id="sp-sns-button-1" class="sp-part-top sp-sns-button">
              <ul>
                <li><iframe src="http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Forion-net.co.jp%2Fconcept.html&amp;layout=button_count&amp;width=120&amp;height=21&amp;send=true&amp;show_faces=true&amp;share=false&amp;action=like&amp;colorscheme=light&amp;font" scrolling="no" frameborder="0" allowtransparency="true" style={{border: "none", overflow: "hidden", width: "120px", height: "21px"}}></iframe></li>
                <li><a href="http://twitter.com/share" class="twitter-share-button" data-count="horizontal" data-lang="ja">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js" charset="utf-8"></script></li>
                  <li><a href="http://line.me/R/msg/text/?%0D%0Ahttp%3A%2F%2Forion-net.co.jp%2Fconcept.html"><img src="img/linebutton_horizontal.png" width="82" height="20" alt="" style={{border: "none"}} /></a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  </div>
);

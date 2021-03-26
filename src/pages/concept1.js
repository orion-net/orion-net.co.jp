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
            <header id="sp-page-title-8" className="entry-header sp-part-top sp-page-title">
              <h1 className="entry-title">成人式・七五三</h1>
            </header>
            <article>
              <div id="page-content" className="sp-part-top sp-block-container">
                <h3 className="paragraph">成人式</h3><br />
                <p className="paragraph">一度きりの特別な記念日。オリオンではプロのカメラマンによる撮影をサロン内で行っております。</p>
                <p className="paragraph">ヘア、メイク、着付け後すぐに撮影致しますので、最高の状態で思い出のショットが残せます。</p>
                <p className="paragraph"> </p>
                <p className="paragraph">ヘア・メイク・着付け・撮影　　 ￥　４５，０００（税抜）</p>
                <p className="paragraph">　　</p>
                <p className="paragraph">　　　　　　　　　　　　　　　※特典　　台紙付きフォト2枚（六つ切り）</p>
                <p className="paragraph">　　　　　　　　　　　　　　　　撮影したすべてのデーター入りCDプレゼント</p>
                <p className="paragraph"> </p>
                <p className="paragraph">ヘア・メイク・着付け　　　　　￥　３８，０００（税抜）　　</p>
                <p className="paragraph"> </p>
                <p className="paragraph">※貸衣装（料金別途）も承っております。</p>
                <p className="paragraph">※金額はお問い合わせください。</p>
                <p className="paragraph"> </p>
                <p className="large paragraph" style={{color : "#e8034a"}}><u className="character" style={{color : "#e60000"}}>注：写真転載厳禁</u></p>
                <p className="paragraph"> </p><br /><a style={{display: "block"}}><img id="sp-image-14" src="/img/u-1t.jpg" className="sp-part-top sp-image"/></a><br /><a style={{display: "block"}}><img id="sp-image-15" src="/img/i-1.jpg" className="sp-part-top sp-image"/></a><br />
                <p className="paragraph"> </p><a style={{display: "block"}}><img id="sp-image-16" src="/img/k-1t.jpg" className="sp-part-top sp-image"/></a>
                <hr /><a style={{display: "block"}}><img id="sp-image-17" src="/img/m-1.jpg" className="sp-part-top sp-image"/></a>
                <h3 className="paragraph">七五三</h3>
                <p className="paragraph">orionではサロンにてプロのカメラマンによる撮影会を開催いたします。</p>
                <p className="paragraph"> </p>
                <p className="large paragraph" style={{color : "#2d2d9f"}}>日程　１１月３日　(<span className="character" style={{color : "#e60000"}}>祝</span>）</p><br />
                <p className="paragraph">三歳　　　　　￥２８．０００（税抜）<br />
                五歳　　　　　￥２２．０００（税抜）<br />
                七歳　　　　　￥３５．０００（税抜）</p>
                <p className="paragraph">ヘア・メイク・着付け・撮影料込</p>
                <p className="paragraph"> </p>
                <p className="paragraph">特典</p>
                <p className="paragraph">CDデータ（スナップ写真・撮影したものすべて）</p>
                <p className="paragraph">台紙付き写真１枚（六つ切り）プレゼント　　　　　　　　　　</p>
                <p className="paragraph"> </p>
                <p className="paragraph">※貸衣装（代金別途）も承っております。<br /></p>
                <p className="paragraph"><br /><br /></p>
                <p className="paragraph">当日以外のヘアメイク　着付けのご予約も承っております。<br /></p>
                <p className="paragraph"> </p>
                <p className="paragraph">三歳　　　　　　￥２３．０００（税抜）<br />
                五歳　　　　　　￥１７．０００（税抜）<br />
                七歳　　　　　　￥３０．０００（税抜）</p>
                <p className="paragraph"> </p>
                <p className="paragraph">ヘア・メイク・着付け</p>
                <p className="paragraph"> </p>
                <p className="paragraph">※貸衣装（代金別途）も承っております。</p>
                <p className="paragraph"> </p>
                <p className="large paragraph" style={{color : "#e60000"}}><u className="character">注：写真転載厳禁</u><br />
                　　　　　　　　</p>
                　　　　　　　　　 <a style={{display: "block"}}><img id="sp-image-18" src="/img/image33.jpg" className="sp-part-top sp-image"/></a><a style={{display: "block"}}><img id="sp-image-19" src="/img/image34.jpg" className="sp-part-top sp-image"/></a><a style={{display: "block"}}><img id="sp-image-20" src="/img/image35.jpg" className="sp-part-top sp-image"/></a><a style={{display: "block"}}><img id="sp-image-21" src="/img/image32.jpg" className="sp-part-top sp-image"/></a>
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

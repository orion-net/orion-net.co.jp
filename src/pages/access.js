import React from "react"
import { Sidebar } from '../components/Sidebar'
import { copyright } from '../messages/copyright'
import { Link } from 'gatsby'
import { LinkNav } from '../components/LinkNav'
import '../../static/style.css'
import {AccessMap} from "../components/AccessMap";

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

          <LinkNav access />

        </nav>
        <div id="breadcrumb-list" className="sp-part-top sp-bread-crumb">
          <div><Link to="/">トップ</Link></div>
          <div>›</div>
          <div>アクセス</div>
        </div>
      </div>
      <div id="main-inner">
        <div id="primary" className="content-area">
          <div id="content" className="site-content sp-part-top sp-content page-access" role="main">
            <header id="sp-page-title-6" className="entry-header sp-part-top sp-page-title">
              <h1 className="entry-title">アクセス</h1></header>
            <article>
              <div id="page-content" className="sp-part-top sp-block-container">
                <h3 className="paragraph">周辺地図</h3>
                <AccessMap />
                <br />
                <p className="paragraph">ORION<br />
                〒213-0026　神奈川県川崎市高津区久末２５３<br />
                TEL.044-766-1610　　ﾌﾘｰﾀﾞｲﾔﾙ .0800-800-1612</p>
                <p className="paragraph"> </p>
                <hr />
                <h3 className="paragraph">アクセス</h3>
                <h4 className="paragraph">電車の場合</h4>
                <p className="paragraph">JR南武線・東急東横線　武蔵小杉駅より　バス　道中坂下、鷺沼駅行き　バス停「久末」下車<br />
                田園都市線　鷺沼駅より　　　　　　　　バス　小杉駅前、新城駅前行き　バス停「久末」下車</p>
                <p className="paragraph">JR南武線・武蔵新城駅より　　　　　　　バス　鷺沼駅行き　バス停「久末」下車</p>
                <p className="paragraph">※バス停「久末」から　徒歩1分　</p>
                <p className="paragraph">　久末交差点を、左にガソリンスタンド、右に旅行会社の道を入りすぐ、右側にございます。</p>
                <h4 className="paragraph">自動車の場合</h4>
                <p className="paragraph">※駐車場２台<br />
                ※店の並び(1軒はさんだ隣）に駐車場スペースがございます。</p>
                <p className="paragraph">　駐車場奥（竹やぶ側）にORIONの立て看板があります。そちらにお停め下さい。</p>
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

import React from "react"
import { Sidebar } from '../components/Sidebar'
import { copyright } from '../messages/copyright'
import { Link } from 'gatsby'
import { LinkNav } from '../components/LinkNav'
import '../../static/style.css'
import {Helmet} from "react-helmet";

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
        <div className="screen-reader-text skip-link">
          <a title="コンテンツへスキップ" href="#content">コンテンツへスキップ</a>
        </div>
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

const App = () => (
  <div id="page" className="site">

    <Header />

    <div id="main" className="site-main sp-part-top sp-main">
      <div id="contenthead" className="sp-part-top sp-content-header">
        <a style={{display: "block"}}>
          <img id="sp-image-1" src="img/top3.gif" className="sp-part-top sp-image" />
        </a>
        <nav id="sp-site-navigation-1" className="navigation-main button-menu sp-part-top sp-site-navigation horizontal" role="navigation">
          <h1 className="menu-toggle">メニュー</h1>
          <div className="screen-reader-text skip-link"><a title="コンテンツへスキップ" href="#content">コンテンツへスキップ</a></div>
          <LinkNav top />
        </nav>
      </div>

      <div id="main-inner">
        <div id="primary" className="content-area">
          <div id="content" className="site-content sp-part-top sp-content page-toppage" role="main">

            <header id="sp-page-title-1" className="entry-header sp-part-top sp-page-title">
              <h1 className="entry-title">トップページ</h1>
            </header>

            <article>
              <div id="page-content" className="sp-part-top sp-block-container">
                <h3 className="paragraph">Orionは、川崎市高津区久末にある美容院・ヘアーサロンです<br /></h3>

                <div style={{border: "solid 5px rgb(218, 74, 74)", borderRadius: "10px", testAlign: "center", padding: "18px"}}>
                  <b>⚠️大切なお知らせ⚠️</b><br /><br />
                  <div style={{testAlign: "left"}}>
                    <p><span style={{color: "red"}}>新柄コロナウイルス</span>の感染拡大防止対策として、当店での同時間帯<span style={{color: "red"}}>３名様以上の</span>予約及び入店をお断りし、間隔を開けての施術対応とさせていただきます。</p>
                    <p>スタッフ一同、消毒や換気に努めてまいります。</p>
                    <p>お客様に置かれましては、たいへんご不便をおかけしますが、ご理解・ご協力の程よろしくお願い申し上げます。</p>
                  </div>
                  <div style={{testAlign: "right"}}>
                    <p>Orion美容室</p>
                  </div>
                </div>

                <br />
                <br />
                メニューには、炭酸泉・ヘッドスパ・着付け・アップ・エステ等もございます。 <br />
                美容全般ご相談ください。 <br />
                成人式・卒業式・七五三・記念撮影のご予約も承ります。 <br />
                早朝のご予約もお問い合わせください。
                <p className="paragraph"> </p>
                ◎各種クレジット取扱い
                <p className="paragraph"> </p>
                <p className="large paragraph">
                  <b className="character" style={{color: "#2d2d9f"}}>◎営業時間　　９：００～１８：００</b>
                  <br />
                  <b className="character" style={{color: "#2d2d9f"}}>◎定休日</b>　　　<b className="character" style={{color: "#2d2d9f"}}>毎週火曜日　第2第3 月曜日</b>
                </p>
                <p className="large paragraph"> </p>
                ※年始休・夏休み（８月）有 　お電話にてお問い合わせください。
                <p className="large paragraph"> </p>
                <p className="paragraph"> </p><br />
              </div>
            </article>

            <div id="sp-wp-post-list-1" className="hpb-viewtype-content hpb-posttype-news sp-part-top sp-wp-post-list">
              <h3><a href="posts/news_archive.html">ニュース</a></h3>
              <div className="hpb-more-entry">
                <a href="posts/news_archive.html">» 続きを読む</a>
              </div>
            </div>

          </div>
        </div>

        <Sidebar />
      </div>
    </div>

    <Footer />

  </div>
)

const Layout = () => (
  <>
    <Helmet>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    </Helmet>
    <App />
  </>
)

export default () => (
  <Layout />
);

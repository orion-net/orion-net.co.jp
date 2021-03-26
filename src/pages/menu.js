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
        <div className="extra sp-part-top sp-site-branding-extra" style={{minHeight: "20px"}} id="sp-site-branding-extra-1">
        </div>
      </div>
    </div>
  </header>
)

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
)

export default () => (
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
          <LinkNav menu />
        </nav>
        <div id="breadcrumb-list" className="sp-part-top sp-bread-crumb">
          <div><Link to="/">トップ</Link></div>
          <div>›</div>
          <div>メニュー</div>
        </div>
      </div>
      <div id="main-inner">
        <div id="primary" className="content-area">
          <div id="content" className="site-content sp-part-top sp-content page-menu" role="main">
            <header id="sp-page-title-3" className="entry-header sp-part-top sp-page-title">
              <h1 className="entry-title">メニュー</h1></header>
            <div id="sp-wp-post-list-2" className="hpb-viewtype-thumbnail hpb-posttype-menu sp-part-top sp-wp-post-list">
              <h3><a href="posts/menu_archive.html">メニュー</a></h3>
              <article>
                <header>
                  <h4>カット</h4>
                </header>
                <div className="entry-content sp-part-top sp-entry-content" id="sp-entry-content-6">
                  <dl id="sp-definition-list-1" className="sp-part-top sp-definition-list">
                    <dt>カット＆ブロー</dt>
                    <dd><b className="character">4.000円（税抜）</b></dd>
                    <dt>　　中学生</dt>
                    <dd><b className="character">3.500円（税抜）</b></dd>
                    <dt>　　小学生</dt>
                    <dd><b className="character">2.500円（税抜）</b></dd>
                    <dt>　　小学生未満</dt>
                    <dd><b className="character">1.500円（税抜）</b></dd>
                    <dt>　　前髪・眉カット</dt>
                    <dd><b className="character">各 500円（税抜）</b></dd>
                  </dl>
                  <br />
                </div>
              </article>
              <article>
                <header>
                  <h4>パーマ  (カット別）</h4>
                </header>
                <div className="entry-content sp-part-top sp-entry-content" id="sp-entry-content-7">
                  <dl id="sp-definition-list-2" className="sp-part-top sp-definition-list">
                    <dt>パーマ</dt>
                    <dd><b className="character">　3.500円(税抜）より</b></dd>
                    <dt>ホット系パーマ</dt>
                    <dd><b className="character"></b><b className="character">　8.000円(税抜）より</b></dd>
                    <dt>ストレートパーマ</dt>
                    <dd><b className="character">　8.500円(税抜）より</b></dd>
                    <dt>ノーアイロン　　　　ストレート</dt>
                    <dd>　 <b className="character">5.000円(税抜) より</b></dd>
                    <dt>ポイントパーマ</dt>
                    <dd>　<b className="character">3.500円(税抜）より</b></dd>
                  </dl>
                </div>
              </article>
              <article>
                <header>
                  <h4>カラー　(カット別）</h4>
                </header>
                <div className="entry-content sp-part-top sp-entry-content" id="sp-entry-content-8">
                  <dl id="sp-definition-list-3" className="sp-part-top sp-definition-list">
                    <dt>リタッチカラー</dt>
                    <dd><b className="character">4.000円 (税抜）より</b></dd>
                    <dt>バージンカラー</dt>
                    <dd><b className="character">4.500円（税抜）より</b></dd>
                    <dt>ポイントカラー</dt>
                    <dd><b className="character">2.500円（税抜）より</b></dd>
                  </dl>
                </div>
              </article>
              <article>
                <header>
                  <h4>マニキュア　(カット別）</h4>
                </header>
                <div className="entry-content sp-part-top sp-entry-content" id="sp-entry-content-9">
                  <dl id="sp-definition-list-4" className="sp-part-top sp-definition-list">
                    <dt>リタッチ</dt>
                    <dd><b className="character">4.000円(税抜) より</b></dd>
                    <dt>バージン</dt>
                    <dd><b className="character">4.500円(税抜)より</b></dd>
                  </dl>
                </div>
              </article>
              <article>
                <header>
                  <h4>トリートメント</h4>
                </header>
                <div className="entry-content sp-part-top sp-entry-content" id="sp-entry-content-10">
                  <dl id="sp-definition-list-5" className="sp-part-top sp-definition-list">
                    <dt>トリートメント</dt>
                    <dd><b className="character">1.700円(税抜)より</b></dd>
                    <dt>水トリートメント　（スチーム）</dt>
                    <dd><b className="character">　500円(税抜)より</b></dd>
                  </dl>
                </div>
              </article>
              <article>
                <header>
                  <h4>シャンプー・セット</h4>
                </header>
                <div className="entry-content sp-part-top sp-entry-content" id="sp-entry-content-11">
                  <dl id="sp-definition-list-6" className="sp-part-top sp-definition-list">
                    <dt>シャンプー</dt>
                    <dd><b className="character">1.000円(税抜)より 　※髪の長さにより異なります</b></dd>
                    <dt>ワンシャンプー</dt>
                    <dd><b className="character">　500円(税抜)より</b></dd>
                    <dt>セット</dt>
                    <dd><b className="character">1.700円(税抜)より　※髪の長さにより異なります</b></dd>
                    <dt>アップ</dt>
                    <dd><b className="character">3.000円(税抜)より　</b><b className="character">※</b><b className="character">スタイルによって異なります</b></dd>
                  </dl>
                </div>
              </article>
              <article>
                <header>
                  <h4>エステ(フェイシャル）・メイク</h4>
                </header>
                <div className="entry-content sp-part-top sp-entry-content" id="sp-entry-content-12">
                  <dl id="sp-definition-list-7" className="sp-part-top sp-definition-list">
                    <dt>エステ</dt>
                    <dd><b className="character">３.000円(税抜)</b></dd>
                    <dt>エステ（フル）</dt>
                    <dd><b className="character">5.000円（税抜）</b></dd>
                    <dt>炭酸パック</dt>
                    <dd><b className="character">　500円(税抜)</b></dd>
                    <dt>エステプラセンタ</dt>
                    <dd><b className="character">2.000円(税抜)</b></dd>
                    <dt>水エステ</dt>
                    <dd><b className="character">3.500円(税抜)</b></dd>
                    <dt>ハンドマッサージ</dt>
                    <dd>　<b className="character">500円</b><b className="character">(税抜</b>)</dd>
                    <dt>メイク</dt>
                    <dd><b className="character">3.0</b><b className="character">00円(税抜)</b><b className="character">より</b></dd>
                  </dl>
                </div>
              </article>
              <article>
                <header>
                  <h4>着付け</h4>
                </header>
                <div className="entry-content sp-part-top sp-entry-content" id="sp-entry-content-13">
                  <dl id="sp-definition-list-8" className="sp-part-top sp-definition-list">
                    <dt>留袖・訪問着</dt>
                    <dd><b className="character">　 7.500</b><b className="character"></b><b className="character">円（税抜)</b></dd>
                    <dt>振袖</dt>
                    <dd>　<b className="character">10.000</b><b className="character">円（税抜）</b></dd>
                    <dt>袴</dt>
                    <dd><b className="character">　 8.000</b><b className="character">円(税抜)</b></dd>
                    <dt>浴衣</dt>
                    <dd><b className="character">　 4.000円(税抜)</b></dd>
                  </dl>
                </div>
              </article>
            </div>
            <article>
              <div id="page-content" className="sp-part-top sp-block-container">
                <p className="paragraph">※成人式、着付け、ヘアメイクのご予約を承ります。</p>
                <p className="paragraph">※七五三、卒業式等の着付けやヘアーセットもお気軽にお問い合わせください。</p>
                <p className="paragraph">　</p>
              </div>
            </article>
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
    <Footer />
  </div>
);

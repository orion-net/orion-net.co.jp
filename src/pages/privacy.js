import React from "react"
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
          <LinkNav privacy />
        </nav>
        <div id="breadcrumb-list" class="sp-part-top sp-bread-crumb">
          <div><Link to="/">トップ</Link></div>
          <div>›</div>
          <div>プライバシーポリシー</div>
        </div>
      </div>
      <div id="main-inner">
        <div id="primary" class="content-area">
          <div id="content" class="site-content sp-part-top sp-content page-privacy" role="main">
            <header id="sp-page-title-7" class="entry-header sp-part-top sp-page-title">
              <h1 class="entry-title">プライバシーポリシー</h1>
            </header>
            <article>
              <div id="page-content" class="sp-part-top sp-block-container">
                <p class="large paragraph">ORION（以下当店）では、個人情報に関する法令およびその他の規範を遵守し、</p>
                <p class="large paragraph">お客様の大切な個人情報の保護に万全を尽くします。</p>
                <h3 class="paragraph">個人情報の収集について</h3>
                <p class="paragraph">当店では、次のような場合に必要な範囲で個人情報を収集することがあります。</p>
                <ul id="sp-list-1" class="sp-part-top sp-list">
                  <li>当店へのお問い合わせ時</li>
                  <li>当店へのサービスお申し込み時</li>
                </ul>
                <hr />
                <h3 class="paragraph">個人情報の利用目的について</h3>
                <p class="paragraph">当店は、お客様から収集した個人情報を次の目的で利用いたします。</p>
                <ul id="sp-list-2" class="sp-part-top sp-list">
                  <li>お客様への連絡のため</li>
                  <li>お客様からのお問い合せに対する回答のため</li>
                  <li>お客様へのサービス提供のため</li>
                </ul>
                <hr />
                <h3 class="paragraph">個人情報の第三者への提供について</h3>
                <p class="paragraph">当店では、お客様より取得した個人情報を第三者に開示または提供することはありません。<br />
                ただし、次の場合は除きます。</p>
                <ul id="sp-list-3" class="sp-part-top sp-list">
                  <li>ご本人の同意がある場合</li>
                  <li>警察からの要請など、官公署からの要請の場合</li>
                  <li>法律の適用を受ける場合</li>
                </ul>
                <hr />
                <h3 class="paragraph">個人情報の開示、訂正等について</h3>
                <p class="paragraph">当店は、お客様ご本人からの自己情報の開示、訂正、削除等のお求めがあった場合は、確実に応じます。</p>
                <hr />
                <h3 class="paragraph">個人情報保護に関するお問い合わせ先</h3>
                <p class="paragraph">TEL.FAX 044-766-1610　ﾌﾘｰﾀﾞｲﾔﾙ.080-0800-1612</p>
                <p class="paragraph">ORION　　代表　　武藤　夏代</p>
              </div>
            </article>
          </div>
        </div>
        <div id="sidebar1" class="sp-part-top sp-sidebar">
          <div id="sp-button-1" class="sp-part-top sp-button"><a href="http://ameblo.jp/teamorion/?frm_id=v.mypage-ameblo--myblog--blog">ブログ</a></div>
          <div id="sp-button-2" class="sp-part-top sp-button"><a href="https://www.facebook.com/orionannex.orion">Face Book</a></div>
          <div id="sp-sns-button-1" class="sp-part-top sp-sns-button">
            <ul>
              <li><iframe src="http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Forion-net.co.jp%2Fprivacy.html&amp;layout=button_count&amp;width=120&amp;height=21&amp;send=true&amp;show_faces=true&amp;share=false&amp;action=like&amp;colorscheme=light&amp;font" scrolling="no" frameborder="0" allowtransparency="true" style={{border:"none", overflow:"hidden", width:"120px", height:"21px"}}></iframe></li>
              <li><a href="http://twitter.com/share" class="twitter-share-button" data-count="horizontal" data-lang="ja">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js" charset="utf-8"></script></li>
                <li><a href="http://line.me/R/msg/text/?%0D%0Ahttp%3A%2F%2Forion-net.co.jp%2Fprivacy.html"><img src="img/linebutton_horizontal.png" width="82" height="20" alt="" style={{border:"none"}}/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <footer id="colophon" class="site-footer sp-part-top sp-footer2" role="contentinfo">
      <div id="colophon-inner" class="sp-part-top sp-footer-inner">
        <nav id="sp-site-navigation-2" class="navigation-main sp-part-top sp-site-navigation minimal" role="navigation">
          <h1 class="menu-toggle">メニュー</h1>
          <div class="screen-reader-text skip-link"><a title="コンテンツへスキップ" href="#content">コンテンツへスキップ</a></div>
          <ul id="menu-mainnav">
            <li class="menu-item current_page_item"><Link to="/privacy">プライバシーポリシー</Link></li>
          </ul>
        </nav>
        <div id="sp-block-container-1" class="sp-part-top sp-block-container">
          <p class="copyright paragraph">Copyright &copy; ○○○, All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
);

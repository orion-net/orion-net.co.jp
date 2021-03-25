import React from "react"
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
          <LinkNav contact />
        </nav>
        <div id="breadcrumb-list" class="sp-part-top sp-bread-crumb">
          <div><Link to="/">トップ</Link></div>
          <div>›</div>
          <div>お問い合わせ</div>
        </div>
      </div>
      <div id="main-inner">
        <div id="primary" class="content-area">
          <div id="content" class="site-content sp-part-top sp-content page-contact" role="main">
            <header id="sp-page-title-5" class="entry-header sp-part-top sp-page-title">
              <h1 class="entry-title">お問い合わせ</h1>
            </header>
            <article>
              <div id="page-content" class="sp-part-top sp-block-container">
                <p class="large paragraph">お問い合わせは、こちらで受付しております。</p>
                <h3 class="paragraph">電話・FAX</h3>
                <dl id="sp-definition-list-9" class="sp-part-top sp-definition-list">
                  <dt>TEL</dt>
                  <dd>044-766-1610 （09:00～18:00）</dd>
                  <dt> </dt>
                  <dd>0800-800-1612 (ﾌﾘｰﾀﾞｲﾔﾙ）</dd>
                  <dt>FAX</dt>
                  <dd>044-766-1610</dd>
                </dl>
                <h3 class="paragraph">お問い合わせフォーム</h3>
                <p class="paragraph">メールでのお問い合わせは、下記にて承っております。</p>
                <p class="paragraph">お返事が遅くなる場合がございます。ご了承くださいませ。</p>
                <p class="paragraph">※ただいまメールがつながらない状態になっております。</p>
                <p class="paragraph">　恐れいりますが、お問い合わせはお電話にてお願い致します。</p>
                <p class="large paragraph"> </p>
                <p class="paragraph">*は必須項目です。</p>
                <form id="sp-form-1" action="" method="GET" name="sp_form" class="sp-part-top sp-form">
                  <table>
                    <tbody>
                      <tr>
                        <th>お問い合わせ内容 *</th>
                        <td><textarea name="message" required="required"/></td>
                      </tr>
                      <tr>
                        <th>お名前（漢字）*</th>
                        <td><input type="text" name="name-kanji" required="required"/></td>
                      </tr>
                      <tr>
                        <th>お名前（フリガナ）*</th>
                        <td><input type="text" name="kana" required="required"/></td>
                      </tr>
                      <tr>
                        <th>E-Mail*</th>
                        <td><input type="text" name="email" required="required"/></td>
                      </tr>
                      <tr>
                        <th>電話番号（半角）*</th>
                        <td><input type="text" name="tel" required="required"/></td>
                      </tr>
                      <tr>
                        <th>FAX番号（半角）</th>
                        <td><input type="text" name="fax"/></td>
                      </tr>
                    </tbody>
                  </table>
                  <input type="submit" value="送信"/>
                </form>
              </div>
            </article>
          </div>
        </div>
        <div id="sidebar1" class="sp-part-top sp-sidebar">
          <div id="sp-button-1" class="sp-part-top sp-button"><a href="http://ameblo.jp/teamorion/?frm_id=v.mypage-ameblo--myblog--blog">ブログ</a></div>
          <div id="sp-button-2" class="sp-part-top sp-button"><a href="https://www.facebook.com/orionannex.orion">Face Book</a></div>
          <div id="sp-sns-button-1" class="sp-part-top sp-sns-button">
            <ul>
              <li><iframe src="http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Forion-net.co.jp%2Fcontact.html&amp;layout=button_count&amp;width=120&amp;height=21&amp;send=true&amp;show_faces=true&amp;share=false&amp;action=like&amp;colorscheme=light&amp;font" scrolling="no" frameborder="0" allowtransparency="true" style={{border:"none", overflow:"hidden", width:"120px", height:"21px"}}></iframe></li>
              <li><a href="http://twitter.com/share" class="twitter-share-button" data-count="horizontal" data-lang="ja">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js" charset="utf-8"></script></li>
                <li><a href="http://line.me/R/msg/text/?%0D%0Ahttp%3A%2F%2Forion-net.co.jp%2Fcontact.html"><img src="img/linebutton_horizontal.png" width="82" height="20" alt="" style={{border:"none"}}/></a></li>
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

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

const Sidebar = () => (
 <div id="sidebar1" class="sp-part-top sp-sidebar">
   <div id="sp-button-1" class="sp-part-top sp-button">
     <a href="http://ameblo.jp/teamorion/?frm_id=v.mypage-ameblo--myblog--blog">ブログ</a>
   </div>

   <div id="sp-button-2" class="sp-part-top sp-button">
     <a href="https://www.facebook.com/orionannex.orion">Face Book</a>
   </div>

   <div id="sp-sns-button-1" class="sp-part-top sp-sns-button">
     <ul>
       <li>
         <iframe src="http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Forion-net.co.jp%2F&amp;layout=button_count&amp;width=120&amp;height=21&amp;send=true&amp;show_faces=true&amp;share=false&amp;action=like&amp;colorscheme=light&amp;font" scrolling="no" frameborder="0" allowtransparency="true" style={{border:"none", overflow: "hidden", width: "120px", height: "21px"}}></iframe>
       </li>
       <li>
         <a href="http://twitter.com/share" class="twitter-share-button" data-count="horizontal" data-lang="ja">Tweet</a>
         <script type="text/javascript" src="http://platform.twitter.com/widgets.js" charset="utf-8"></script>
       </li>
       <li>
         <a href="http://line.me/R/msg/text/?%0D%0Ahttp%3A%2F%2Forion-net.co.jp%2F">
           <img src="img/linebutton_horizontal.png" width="82" height="20" alt="" style={{border: "none"}} />
         </a>
       </li>
     </ul>
   </div>
 </div>
);

const Footer = () => (
  <footer id="colophon" class="site-footer sp-part-top sp-footer2" role="contentinfo">
    <div id="colophon-inner" class="sp-part-top sp-footer-inner">
      <nav id="sp-site-navigation-2" class="navigation-main sp-part-top sp-site-navigation minimal" role="navigation">
        <h1 class="menu-toggle">メニュー</h1>
        <div class="screen-reader-text skip-link">
          <a title="コンテンツへスキップ" href="#content">コンテンツへスキップ</a>
        </div>
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
          <div class="screen-reader-text skip-link"><a title="コンテンツへスキップ" href="#content">コンテンツへスキップ</a></div>
          <LinkNav top />
        </nav>
      </div>

      <div id="main-inner">
        <div id="primary" class="content-area">
          <div id="content" class="site-content sp-part-top sp-content page-toppage" role="main">

            <header id="sp-page-title-1" class="entry-header sp-part-top sp-page-title">
              <h1 class="entry-title">トップページ</h1>
            </header>

            <article>
              <div id="page-content" class="sp-part-top sp-block-container">
                <h3 class="paragraph">Orionは、川崎市高津区久末にある美容院・ヘアーサロンです<br /></h3>

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
                <p class="paragraph"> </p>
                ◎各種クレジット取扱い
                <p class="paragraph"> </p>
                <p class="large paragraph">
                  <b class="character" style={{color: "#2d2d9f"}}>◎営業時間　　９：００～１８：００</b>
                  <br />
                  <b class="character" style={{color: "#2d2d9f"}}>◎定休日</b>　　　<b class="character" style={{color: "#2d2d9f"}}>毎週火曜日　第2第3 月曜日</b>
                </p>
                <p class="large paragraph"> </p>
                ※年始休・夏休み（８月）有 　お電話にてお問い合わせください。
                <p class="large paragraph"> </p>
                <p class="paragraph"> </p><br />
              </div>
            </article>

            <div id="sp-wp-post-list-1" class="hpb-viewtype-content hpb-posttype-news sp-part-top sp-wp-post-list">
              <h3><a href="posts/news_archive.html">ニュース</a></h3>
              <div class="hpb-more-entry">
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
);

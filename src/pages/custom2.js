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
          <div class="extra sp-part-top sp-site-branding-extra" style={{minHeight: "20px"}} id="sp-site-branding-extra-1">
          </div>
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
          <div class="screen-reader-text skip-link">
            <a title="コンテンツへスキップ" href="#content">コンテンツへスキップ</a>
          </div>
          <LinkNav custom2 />
        </nav>
        <div id="breadcrumb-list" class="sp-part-top sp-bread-crumb">
          <div><Link to="/">トップ</Link></div>
          <div>›</div>
          <div>おすすめ</div>
        </div>
      </div>
      <div id="main-inner">
        <div id="primary" class="content-area">
          <div id="content" class="site-content sp-part-top sp-content page-custom2" role="main">
            <header id="sp-page-title-11" class="entry-header sp-part-top sp-page-title">
              <h1 class="entry-title">おすすめ</h1>
            </header>
            <article>
              <div id="page-content" class="sp-part-top sp-block-container">
                <h1 class="paragraph" style={{textAlign : "left"}}>ミントベル　シャンプー・コンディショナー　<br /></h1><br /><br />
                <a style={{display: "block"}}><img id="sp-image-30" src="img/IMG_4.JPG" class="sp-part-top sp-image" /></a>
                <p class="large paragraph"> </p>
                <p class="large paragraph"> </p>
                <p class="large paragraph">天然メントール（涼感成分）配合、メントールの気持ちの良い爽快感と、<br /><br />
                すっきりとした 洗い上がりで、夏にピッタリ！<br /><br />
                髪と頭皮の環境を整え、すこやかな髪へと導き、軽いサラッとした仕上がりで<br /><br />
                かゆみや汗のニオイを抑えます。<br /><br />
                リニューアルによって追加された成分「カキタンニン」で<br /><br />
                気になる汗や皮脂の多い夏に最適です。<br /><br /><br />
                今なら、シャンプー・コンディショナーのセットに可愛いアザラシの<br /><br />
                イラスト入りのボディーソープが付いてきて、とてもお得です！<br /><br />
                この機会にぜひお買い求めくださいませ。<br /><br /><b class="character" style={{color : "#2d2d9f"}}>セット料金　￥３.９６０</b><br /><br /><br />
                ※ボディーソープが付いたセットはなくなり次第終了となります。<br />
                ※シャンプー、コンディショナーは単品でも販売しております。<br />
                （ボディーソープのみの販売はしておりません）<br /><br /><br /><br /><br /><b class="character" style={{color : "#f04a42"}}>〇ミントベル　アイランドピンクシャンプー</b><br /><br /><span class="character" style={{color : "#2d2d9f"}}>単品　￥１.680</span><br /><br />
                天然メントール（涼感成分）配合でクールな洗い上がりのミントベルシリーズから、<br /><br />
                髪のうるおいも欲しい方におすすめの「ミントベル　アイランドピンクシャンプー」が新登場。<br /><br />
                保湿成分として、ハイビスカス花エキスとプラセンタエキスを配合。<br /><br />
                夏の日差しでパサつきがちな髪へうるおいを与えるとともに、<br /><br />
                華やかなサニーハイビスカスの香りが漂います。<br /><br /><br /><br /><br /><b class="character" style={{color : "#f04a42"}}>〇ミントベル　スキャルプコンディショナー</b><br /><br /><span class="character" style={{color : "#2d2d9f"}}>単品　￥2.280</span><br /><br />
                天然メントール（涼感成分）配合で頭皮に爽快感とうるおいを与え、</p>
                <p class="large paragraph">さらっとした髪に仕上げます。<br /><br />
                センブリエキス（保湿成分）やホホバ種子油（保湿成分）、</p>
                <p class="large paragraph">保湿成分であるシアバター（シア脂）、<br /><br />
                カキタンニン（毛髪保護成分）を配合。<br /><br />
                シトラスフローラルフルーティーの香り。<br /><br /><br /><b class="character" style={{color : "#f04a42"}}>〇ミントベル　ボディーソープ</b><br /><br /><br />
                天然メントール（涼感成分）配合でスッキリ爽快な洗い上がり。<br /></p>
                <p class="large paragraph">ヒアルロン酸（保湿成分）とグレープフルーツ果実エキス（保湿成分）配合で、<br /></p>
                <p class="large paragraph">うるおいとしっとり感を。<br /></p>
                <p class="large paragraph">グレープフルーツとミントの香り。</p>
                <p class="large paragraph"> </p>
                <p class="large paragraph"> </p>
                <p class="large paragraph"> </p>
                <p class="large paragraph"> </p>
                <p class="large paragraph"> </p>
                <p class="large paragraph"> </p>
                <p class="large paragraph"> </p>
                <p class="large paragraph"> </p>
                <p class="large paragraph"> </p>
                <p class="large paragraph"> </p>
                <p class="large paragraph"> </p>
                <h1 class="paragraph" style={{textAlign : "left"}}>フィトリーク</h1>
                <p class="paragraph"> </p><a style={{display: "block"}}><img id="sp-image-31" src="img/IMG_1857.JPG" class="sp-part-top sp-image" /></a>
                <p class="paragraph"> </p>
                <p class="large paragraph"><b class="character" style={{color : "#2d2d9f"}}>９７mL ￥２,６００（税抜</b>）</p>
                <p class="paragraph"> </p>
                <p class="large paragraph" style={{color : "#df5300"}}><b class="character">フィトリーク</b></p>
                <p class="paragraph">＜肌と髪の保湿ローション＞<br /></p>
                <p class="paragraph"> </p>
                <p class="large paragraph">天然オイルと美容液配合で、髪の内部から潤ってサラサラに</p>
                <p class="large paragraph">香りも豊かで華やか<br />
                天然植物オイルなので肌にも使用できます<br /></p>
                <p class="large paragraph"> </p>
                <p class="large paragraph" style={{color : "#2d2d9f"}}><b class="character">☆特徴</b>　<br /></p>
                <p class="paragraph"> </p>
                <p class="large paragraph"><span class="character" style={{color : "#d85a6a"}}>〇２層式だからできるワンステップでダブルトリートメント</span><br /></p>
                <p class="paragraph">従来のオイルトリートメントには配合することの出来なかった、水溶性の保湿・補修成分(美容液成分)を配合。髪の内部と表面を同時にトリートメントします。<br />
                ※髪の内部補修と表面保護<br /></p>
                <p class="paragraph"> </p>
                <p class="large paragraph"><span class="character" style={{color : "#ce3348"}}>〇肌にも使用できる贅沢な処方</span><br /></p>
                <p class="paragraph">天然植物オイル、美容液成分配合。パラペンフリー。</p>
                <p class="paragraph">髪はもちろん肌に対しても使用できる保護ローションです。<br /></p>
                <p class="paragraph"> </p>
                <p class="large paragraph" style={{color : "#ce3348"}}>〇だから、ハイブリッドに使える<br /></p>
                <p class="paragraph">髪になじませた後の手に残ったトリートメントは、手・腕・ひじ等、お肌の乾燥が気になる部分へ</p>
                <p class="paragraph">ボディーローション（保湿ローション）として使用出来るハイブリッドユース。</p>
                <p class="paragraph">手を洗う必要はありません。<br /></p>
                <p class="paragraph"> </p>
                <p class="large paragraph"><span class="character" style={{color : "#ce3348"}}>〇フローラル　アンバリーの神秘的なフレグランス</span><br /></p>
                <p class="paragraph">手に取った瞬間、はじけるシトラスの爽やかさ。<br />
                時間とともにフローラル、そして大人の女性をイメージさせるアンバーへと変化。濃厚な花の香りと神秘的な香りが出会った華やかで豊かな香りです</p>
                <p style={{color : "#4b4bcd"}} class="paragraph"><br /><span class="character" style={{color : "#2d2d9f"}}>ブルー　　：天然植物オイル</span><br /><span class="character" style={{color : "#ff701a"}}>オレンジ　：美容液成分</span><br /></p>
                <p class="paragraph"> </p>
                <p class="large paragraph"><b class="character" style={{color : "#2d2d9f"}}>☆使い方　</b></p>
                <p class="paragraph"><br />
                使用量の目安　セミロングで２～３滴</p>
                <p class="large paragraph"><br />
                ① ２層が均一になるまでよく振ります。</p>
                <p class="large paragraph"><br />
                ② 適量を手に取り、毛先や傷んでいるところを中心に塗布し、馴染ませてください。</p>
                <p class="large paragraph"><br />
                ③ 手に残ったトリートメントは、手・腕・ひじ等・お肌の乾燥が気になる部分へ</p>
                <p class="large paragraph">　ボディーローション(保護ローション)としてご使用ください。<br /></p>
                <p class="paragraph"> </p>
                <p class="large paragraph"><b class="character" style={{color : "#2d2d9f"}}>☆効果</b><br /></p>
                <p class="paragraph"> </p>
                <p class="large paragraph">デュアル　モイスト効果で芯まで長時間うるおって柔らかく。<br />
                髪内部へ浸透した美容液成分をオイルトリートメントが包み込む</p>
                <p class="large paragraph">デュアルモイスト効果によって、</p>
                <p class="large paragraph">内部からの水分蒸発を抑え、潤いを長時間持続させます。<br /></p>
                <p class="large paragraph"> </p>
                <p class="paragraph"> </p>
                <p class="paragraph"> </p>
                <p class="paragraph"> </p>
                <p class="paragraph"> </p>
                <p class="paragraph"> </p>
                <p class="paragraph"> </p>
                <p class="paragraph"> </p>
                <p class="paragraph"> </p>
                <p class="paragraph"><br /></p>
                <h1 class="paragraph">F.プロテクト フォルムキーパー</h1>
                <p class="paragraph"> </p><a style={{display: "block"}}><img id="sp-image-32" src="img/image30.JPG" class="sp-part-top sp-image" /></a>
                <p class="paragraph"> </p>
                <p class="large paragraph" style={{color : "#2d2d9f"}}>200mL　¥1,200　　※価格は税抜きとなります。</p>
                <p class="paragraph"> </p>
                <p class="large paragraph" style={{fontSize : "1.6rem", color : "#ececec"}}><b class="character" style={{color : "#df5300"}}>Ｆ.プロテクト フォルムキーパー</b></p>
                <p class="paragraph">＜洗い流さないヘアトリートメント＞</p>
                <p class="paragraph"> </p>
                <p class="large paragraph">サロンでケアした、カラー・パーマ後のフォルムをさらに美しく、</p>
                <p class="large paragraph">長時間キープさせる洗い流さないタイプのトリートメントです</p>
                <p class="paragraph"> </p>
                <p class="paragraph"> </p>
                <p class="large paragraph"><b class="character" style={{color : "#2d2d9f"}}>☆特徴</b></p>
                <p class="paragraph"> </p>
                <p class="large paragraph">〇ダメージによって失われた髪の細胞の補修・保護</p>
                <p class="large paragraph">〇紫外線によるカラーの褐色を抑える</p>
                <p class="large paragraph">〇コスメ系薬剤の残臭を抑える</p><br /><br />
                <p class="large paragraph"><b class="character" style={{color : "#2d2d9f"}}>☆使用方法</b></p>
                <p class="paragraph"> </p>
                <p class="large paragraph">〇ダメージによって失われた髪の細胞の補修・保護</p>
                <p class="large paragraph">〇ハーフドライの状態(ドライ後でも使用可)の髪に適量をなじませた後、</p>
                <p class="large paragraph">乾かしながら仕上げをしてください。</p>
                <p class="large paragraph"> </p>
                <p class="paragraph">※その他、ご質問や使用感等はサロンでお気軽にお尋ねください。</p><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <h1 class="paragraph"><b class="character" style={{color : "#1c1c64"}}>ミラベルファースト</b>　　MIRABELLE FIRST</h1><a style={{display: "block"}}><img id="sp-image-33" src="img/image27.JPG" class="sp-part-top sp-image" /></a>
                <p class="paragraph"> </p>
                <p class="large paragraph" style={{color : "#2d2d9f"}}>ミラベルファースト<br />
                カクテルリシェソーダフォーム（洗顔料）<br />
                230ｇ/3,500円（税抜）<br /><br /><b class="character">○炭酸効果で血行促進させながらお肌に負担をかけることのない</b><br /><b class="character">機能性炭酸洗顔で</b><b class="character">す</b><br /><br /></p>
                <p class="large paragraph" style={{color : "#2d2d9f"}}><b class="character" style={{color : "#004000"}}>●洗顔の基本は泡</b><br /></p>
                <p class="large paragraph" style={{color : "#7d5b4f"}}>泡洗顔とは、肌に摩擦を与えずに手と肌の間で泡を転がすようにして洗う洗顔です。<br />
                泡洗顔することでお肌のキメが整い毛穴が目立たなくなります。<br /><br />
                カクテルリシェソーダフォームは、濃密で弾力性の高い泡。<br />
                流れ落ちることなく、お肌をしっかり包み込みこみ摩擦を起こさずに洗顔できます。<br />
                炭酸濃密泡なので、お顔にのせるだけでほんわかとお肌が温まり血行促進効果を発揮します。<br /><br />
                朝の寝起きにリフレッシュマッサージとして、１日の終わりに疲れを癒すリンパマッサージやパックとして、洗顔だけで多機能性の高い洗顔フォームです。<br /><br /><b class="character" style={{color : "#004000"}}>●30秒の効果の理由</b><br /></p>
                <p class="large paragraph">炭酸の効果は、入浴剤で例えると20分以上炭酸に浸かることで効果はが得られます。<br />
                カクテルリシェソーダフォームの炭酸は、入浴剤１錠(約100ppm)の約100倍の効果があります。<br />
                １度の洗顔で約10,000ppmの炭酸濃度なので30秒で血行促進＆新陳代謝力を促進してくれる効果があります。<br /><br />
                洗顔後は、炭酸の力により、血行促進だけでなく、抗シミ効果・美白効果、ターンオーバー調整、肌のトーンが明るくなります。<br /></p>
                <p class="large paragraph">クマやくすみなども肌のトーンを暗く見える原因となる血行不良が原因ですので、血行促進＆新陳代謝を促進させることによりお肌のトーンを明るくさせてくれます。<br /></p>
                <p class="large paragraph">炭酸の力は、ニキビ・吹き出物といった老廃物を除去してくれる効果もあります。思春期の肌や大人のニキビ肌にもオススメです。<br /></p>
                <p class="large paragraph"> </p>
                <p class="large paragraph"> </p>
                <p class="large paragraph" style={{color : "#ce3348"}}><strong class="character" style={{color : "#d85a6a"}}>［使い方］</strong><br /></p>
                <p class="large paragraph" style={{color : "#ce3348"}}><span class="character" style={{color : "#2d2d9f"}}>ピンポン玉くらいの量を手に取り、顔全体に泡を広げて、泡で顔を包み込むようにして泡を塗布します。</span><br /></p>
                <p class="large paragraph" style={{color : "#2d2d9f"}}>30秒ほどおいていただくとパック効果となります。</p>
                <p class="large paragraph" style={{color : "#2d2d9f"}}>その後、水またはぬるま湯で十分にすすいでください。<br /><br />
                ※できるだけ手や顔が濡れていない状態でご使用ください。<br />
                ※ご使用前によく振ってください。<br />
                ※頭部を上にしてご使用ください。<br /><br /></p><a style={{display: "block"}}><img id="sp-image-34" src="img/image29.JPG" class="sp-part-top sp-image" /></a>
                <p class="large paragraph" style={{color : "#ce3348"}}><br />
                MIRABELLE FIRST（ミラベル ファースト）は、極上の潤い肌へ導く、<br />
                パーフェクトケアステップです。<br />
                配合されている成分は独自で作った成分そのままを配合されているので効果が早く低価格。スキンケアを朝晩のお手入れに使用するだけで<br />
                エイジング効果がより確かに早く実感できます。<br />
                化粧品選びに悩まれている方、敏感肌の方は是非お試しください。<br /><br /></p>
              </div>
            </article>
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

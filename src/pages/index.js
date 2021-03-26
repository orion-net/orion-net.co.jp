import React from "react"
import { Layout } from "../components/Layout"
import "../../static/style.css"

const Main = () => (
  <Layout currentNav={{ top: true }} pageTitle="トップ">
    <div id="primary" className="content-area">
      <div
        id="content"
        className="site-content sp-part-top sp-content page-toppage"
        role="main"
      >
        <header
          id="sp-page-title-1"
          className="entry-header sp-part-top sp-page-title"
        >
          <h1 className="entry-title">トップページ</h1>
        </header>

        <article>
          <div id="page-content" className="sp-part-top sp-block-container">
            <h3 className="paragraph">
              オリオンは、川崎市高津区久末にある美容院・ヘアーサロンです
              <br />
            </h3>
            <div
              style={{
                border: "solid 5px rgb(218, 74, 74)",
                borderRadius: "10px",
                testAlign: "center",
                padding: "18px",
              }}
            >
              <b>⚠️大切なお知らせ⚠️</b>
              <br />
              <br />
              <div style={{ testAlign: "left" }}>
                <p>
                  <span style={{ color: "red" }}>新柄コロナウイルス</span>
                  の感染拡大防止対策として、当店での同時間帯
                  <span style={{ color: "red" }}>３名様以上の</span>
                  予約及び入店をお断りし、間隔を開けての施術対応とさせていただきます。
                </p>
                <p>スタッフ一同、消毒や換気に努めてまいります。</p>
                <p>
                  お客様に置かれましては、たいへんご不便をおかけしますが、ご理解・ご協力の程よろしくお願い申し上げます。
                </p>
              </div>
              <div style={{ testAlign: "right" }}>
                <p>オリオン美容室</p>
              </div>
            </div>
            <br />
            <br />
            メニューには、炭酸泉・ヘッドスパ・着付け・アップ・エステ等もございます。{" "}
            <br />
            美容全般ご相談ください。 <br />
            成人式・卒業式・七五三・記念撮影のご予約も承ります。 <br />
            早朝のご予約もお問い合わせください。
            <p className="paragraph"> </p>
            ◎各種クレジット取扱い
            <p className="paragraph"> </p>
            <p className="large paragraph">
              <b className="character" style={{ color: "#2d2d9f" }}>
                ◎営業時間　　９：００～１８：００
              </b>
              <br />
              <b className="character" style={{ color: "#2d2d9f" }}>
                ◎定休日
              </b>

              <b className="character" style={{ color: "#2d2d9f" }}>
                毎週火曜日　第2第3 月曜日
              </b>
            </p>
            <p className="large paragraph"> </p>
            ※年始休・夏休み（８月）有 　お電話にてお問い合わせください。
            <p className="large paragraph"> </p>
            <p className="paragraph"> </p>
            <br />
          </div>
        </article>

        <div
          id="sp-wp-post-list-1"
          className="hpb-viewtype-content hpb-posttype-news sp-part-top sp-wp-post-list"
        >
          <h3>
            <a href="posts/news_archive.html">ニュース</a>
          </h3>
          <div className="hpb-more-entry">
            <a href="posts/news_archive.html">» 続きを読む</a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Main

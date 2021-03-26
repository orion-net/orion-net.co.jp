import React from "react"
import "../../static/style.css"
import { Layout } from "../components/Layout"

const Main = () => (
  <Layout currentNav={{ custom1: true }} pageTitle="ご予約">
    <div id="primary" className="content-area">
      <div
        id="content"
        className="site-content sp-part-top sp-content page-custom1"
        role="main"
      >
        <header
          id="sp-page-title-9"
          className="entry-header sp-part-top sp-page-title"
        >
          <h1 className="entry-title">ご予約</h1>
        </header>
        <article>
          <div id="page-content" className="sp-part-top sp-block-container">
            <p className="large paragraph">　</p>
            <p className="large paragraph">
              ご予約はお電話でお願い致します 。<br />
            </p>
            <p className="large paragraph"> </p>
            <p className="large paragraph">
              　　TEL・FAX 　　{" "}
              <strong className="strong character">044-766-1610</strong>
            </p>
            <p className="large paragraph">
              <br />
              　　ﾌﾘｰﾀﾞｲﾔﾙ　 　　
              <strong className="character">0800-800-1612</strong>
            </p>
          </div>
        </article>
      </div>
    </div>
  </Layout>
)

export default Main

import React from "react"
import { Layout } from "../components/Layout"

const Main = () => (
  <Layout pageTitle="ページが見つかりません！" fileName="404.js">
    <div id="primary" className="content-area">
      <div
        id="content"
        className="site-content sp-part-top sp-content page-concept1"
        role="main"
      >
        <h1>ページが見つかりません！</h1>
        <article>
          <a href="/">トップページへ戻る</a>
        </article>
      </div>
    </div>
  </Layout>
)

export default Main

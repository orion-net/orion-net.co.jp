import React from "react"
import { Sidebar } from "../components/Sidebar"
import "../../static/style.css"
import { Layout } from "../components/Layout"

const Main = () => (
  <Layout>
    <div id="main-inner">
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
      <Sidebar />
    </div>
  </Layout>
)

export default Main

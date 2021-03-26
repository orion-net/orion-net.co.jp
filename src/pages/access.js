import React from "react"
import "../../static/style.css"
import { AccessMap } from "../components/AccessMap"
import { Layout } from "../components/Layout"

const Main = () => (
  <Layout currentNav={{ access: true }} pageTitle="アクセス">
    <div id="primary" className="content-area">
      <div
        id="content"
        className="site-content sp-part-top sp-content page-access"
        role="main"
      >
        <header
          id="sp-page-title-6"
          className="entry-header sp-part-top sp-page-title"
        >
          <h1 className="entry-title">アクセス</h1>
        </header>
        <article>
          <div id="page-content" className="sp-part-top sp-block-container">
            <h3 className="paragraph">周辺地図</h3>
            <AccessMap />
            <br />
            <p className="paragraph">
              オリオン美容室
              <br />
              〒213-0026　神奈川県川崎市高津区久末２５３
              <br />
              TEL.044-766-1610　　ﾌﾘｰﾀﾞｲﾔﾙ .0800-800-1612
            </p>
            <p className="paragraph"> </p>
            <hr />
            <h3 className="paragraph">アクセス</h3>
            <h4 className="paragraph">電車の場合</h4>
            <p className="paragraph">
              JR南武線・東急東横線　武蔵小杉駅より　バス　道中坂下、鷺沼駅行き　バス停「久末」下車
              <br />
              田園都市線　鷺沼駅より　　　　　　　　バス　小杉駅前、新城駅前行き　バス停「久末」下車
            </p>
            <p className="paragraph">
              JR南武線・武蔵新城駅より　　　　　　　バス　鷺沼駅行き　バス停「久末」下車
            </p>
            <p className="paragraph">※バス停「久末」から　徒歩1分　</p>
            <p className="paragraph">
              　久末交差点を、左にガソリンスタンド、右に旅行会社の道を入りすぐ、右側にございます。
            </p>
            <h4 className="paragraph">自動車の場合</h4>
            <p className="paragraph">
              ※駐車場２台
              <br />
              ※店の並び(1軒はさんだ隣）に駐車場スペースがございます。
            </p>
            <p className="paragraph">
              　駐車場奥（竹やぶ側）にORIONの立て看板があります。そちらにお停め下さい。
            </p>
          </div>
        </article>
      </div>
    </div>
  </Layout>
)

export default Main

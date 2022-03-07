import React from "react"
import { AccessMap } from "../components/AccessMap"
import { Layout } from "../components/Layout"
import { PhoneNumberLink } from "../components/PhoneNumberLink"

const Main = () => (
  <Layout currentNav={{ access: true }} pageTitle="アクセス">
    <h1>アクセス</h1>
    <div id="page-content">
      <h2>周辺地図</h2>
      <AccessMap />
      <br />
      <p>
        オリオン美容室
        <br />
        〒213-0026　神奈川県川崎市高津区久末２５３
        <br />
        TEL: <PhoneNumberLink number="044-766-1610" />
        <br />
        ﾌﾘｰﾀﾞｲﾔﾙ: <PhoneNumberLink number="0800-800-1612" />
      </p>
      <p> </p>
      <h2>アクセス</h2>
      <div>
        <div className="access-way">電車の場合</div>
        <p>
          JR南武線・東急東横線　武蔵小杉駅より　バス　道中坂下、鷺沼駅行き　バス停「久末」下車
          <br />
          田園都市線　鷺沼駅より　　　　　　　　バス　小杉駅前、新城駅前行き　バス停「久末」下車
        </p>
        <p>
          JR南武線・武蔵新城駅より　　　　　　　バス　鷺沼駅行き　バス停「久末」下車
        </p>
        <p>※バス停「久末」から　徒歩1分　</p>
        <p>
          　久末交差点を、左にガソリンスタンド、右に旅行会社の道を入りすぐ、右側にございます。
        </p>
        <div className="access-way">自動車の場合</div>
        <p>
          ※駐車場２台
          <br />
          ※店の並び(1軒はさんだ隣）に駐車場スペースがございます。
        </p>
        <p>
          　駐車場奥（竹やぶ側）にORIONの番号の８番９番があります。そちらにお停め下さい。
        </p>
      </div>
    </div>
  </Layout>
)

export default Main

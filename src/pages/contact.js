import React from "react"
import { Layout } from "../components/Layout"
import { PhoneNumberLink } from "../components/PhoneNumberLink"

const Main = () => (
  <Layout currentNav={{ contact: true }} pageTitle="お問い合わせ">
    <h1>お問い合わせ</h1>
    <div className="discription">
      お問い合わせは、こちらで受付しております。
    </div>
    <h2>電話・FAX</h2>
    <div className="menu">
      <dl>
        <dt>TEL</dt>
        <dd>
          <PhoneNumberLink number="044-766-1610" />
          （09:00～18:00）
        </dd>
        <dt></dt>
        <dd>
          <PhoneNumberLink number="0800-800-1612" /> (ﾌﾘｰﾀﾞｲﾔﾙ）
        </dd>
        <dt>FAX</dt>
        <dd>
          <PhoneNumberLink number="044-766-1610" />
        </dd>
      </dl>
    </div>
  </Layout>
)

export default Main

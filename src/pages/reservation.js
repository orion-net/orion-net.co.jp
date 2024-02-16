import React from "react"
import { Layout } from "../components/Layout"
import { PhoneNumberLink } from "../components/PhoneNumberLink"

const Main = () => (
  <Layout
    currentNav={{ reservation: true }}
    pageTitle="ご予約"
    fileName="reservation.js"
  >
    <h1>ご予約</h1>
    <div className="discription">ご予約はお電話でお願い致します。</div>
    <div className="menu">
      <dl>
        <dt>TEL・FAX</dt>
        <dd>
          <PhoneNumberLink number="044-766-1610" />
        </dd>
        <dt>ﾌﾘｰﾀﾞｲﾔﾙ</dt>
        <dd>
          <PhoneNumberLink number="0800-800-1612" />
        </dd>
      </dl>
    </div>
  </Layout>
)

export default Main

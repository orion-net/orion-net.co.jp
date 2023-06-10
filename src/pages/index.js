import React from "react"
import { Layout } from "../components/Layout"

const Main = () => (
  <Layout currentNav={{ top: true }} pageTitle="トップ" fileName="index.js">
    <h1>トップページ</h1>
    <h2>オリオンは、川崎市高津区久末にある美容院・ヘアーサロンです。</h2>
    <div className="discription">
      メニューには、炭酸泉・ヘッドスパ・着付け・アップ・エステ等もございます。
      <br />
      美容全般ご相談ください。
      <br />
      成人式・卒業式・七五三・記念撮影のご予約も承ります。
      <br />
      早朝のご予約もお問い合わせください。 ◎各種クレジット取扱い
    </div>
    <div className="discription">
      <b style={{ color: "#2d2d9f" }}>◎営業時間　　9:00～18:00</b>
      <br />
      <b style={{ color: "#2d2d9f" }}>◎定休日</b>
      <b style={{ color: "#2d2d9f" }}>毎週火曜日　第１第2第3月曜日</b>
    </div>
    <div className="discription">
      ※年始休・夏休み（８月）有 　お電話にてお問い合わせください。
    </div>
  </Layout>
)

export default Main

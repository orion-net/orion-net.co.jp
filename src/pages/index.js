import React from "react"
import { Layout } from "../components/Layout"

const Main = () => (
  <Layout currentNav={{ top: true }} pageTitle="トップ" fileName="index.js">
    <h1>トップページ</h1>
    <h2>オリオンは、川崎市高津区久末にある美容院・ヘアーサロンです。</h2>
    <div
      style={{
        border: "solid 5px rgb(218, 74, 74)",
        borderRadius: "10px",
        testAlign: "center",
        padding: "18px",
        marginBottom: "30px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <p>
          <b>⚠️大切なお知らせ⚠️</b>
        </p>
      </div>
      <br />
      <p>
        <span style={{ color: "red" }}>新柄コロナウイルス</span>
        の感染拡大防止対策として、当店での同時間帯
        <span style={{ color: "red" }}>３名様以上の</span>
        予約及び入店をお断りし、間隔を開けての施術対応とさせていただきます。
      </p>
      <br />
      <p>スタッフ一同、消毒や換気に努めてまいります。</p>
      <br />
      <p>
        お客様に置かれましては、たいへんご不便をおかけしますが、ご理解・ご協力の程よろしくお願い申し上げます。
      </p>
      <br />
      <div style={{ textAlign: "right" }}>
        <p>オリオン美容室</p>
      </div>
    </div>
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
      <b style={{ color: "#2d2d9f" }}>毎週火曜日　第2第3月曜日</b>
    </div>
    <div className="discription">
      ※年始休・夏休み（８月）有 　お電話にてお問い合わせください。
    </div>
  </Layout>
)

export default Main

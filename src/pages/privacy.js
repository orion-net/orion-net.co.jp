import React from "react"
import { Layout } from "../components/Layout"
import "../../static/style.css"

const Main = () => (
  <Layout currentNav={{ privacy: true }} pageTitle="プライバシーポリシー">
    <div id="primary" className="content-area">
      <div
        id="content"
        className="site-content sp-part-top sp-content page-privacy"
        role="main"
      >
        <header
          id="sp-page-title-7"
          className="entry-header sp-part-top sp-page-title"
        >
          <h1 className="entry-title">プライバシーポリシー</h1>
        </header>
        <article>
          <div id="page-content" className="sp-part-top sp-block-container">
            <p className="large paragraph">
              オリオン（以下当店）では、個人情報に関する法令およびその他の規範を遵守し、
            </p>
            <p className="large paragraph">
              お客様の大切な個人情報の保護に万全を尽くします。
            </p>
            <h3 className="paragraph">個人情報の収集について</h3>
            <p className="paragraph">
              当店では、次のような場合に必要な範囲で個人情報を収集することがあります。
            </p>
            <ul id="sp-list-1" className="sp-part-top sp-list">
              <li>当店へのお問い合わせ時</li>
              <li>当店へのサービスお申し込み時</li>
            </ul>
            <hr />
            <h3 className="paragraph">個人情報の利用目的について</h3>
            <p className="paragraph">
              当店は、お客様から収集した個人情報を次の目的で利用いたします。
            </p>
            <ul id="sp-list-2" className="sp-part-top sp-list">
              <li>お客様への連絡のため</li>
              <li>お客様からのお問い合せに対する回答のため</li>
              <li>お客様へのサービス提供のため</li>
            </ul>
            <hr />
            <h3 className="paragraph">個人情報の第三者への提供について</h3>
            <p className="paragraph">
              当店では、お客様より取得した個人情報を第三者に開示または提供することはありません。
              <br />
              ただし、次の場合は除きます。
            </p>
            <ul id="sp-list-3" className="sp-part-top sp-list">
              <li>ご本人の同意がある場合</li>
              <li>警察からの要請など、官公署からの要請の場合</li>
              <li>法律の適用を受ける場合</li>
            </ul>
            <hr />
            <h3 className="paragraph">個人情報の開示、訂正等について</h3>
            <p className="paragraph">
              当店は、お客様ご本人からの自己情報の開示、訂正、削除等のお求めがあった場合は、確実に応じます。
            </p>
            <hr />
            <h3 className="paragraph">個人情報保護に関するお問い合わせ先</h3>
            <p className="paragraph">
              TEL.FAX 044-766-1610　ﾌﾘｰﾀﾞｲﾔﾙ.080-0800-1612
            </p>
            <p className="paragraph">オリオン美容室　　代表　　武藤　夏代</p>
          </div>
        </article>
      </div>
    </div>
  </Layout>
)

export default Main

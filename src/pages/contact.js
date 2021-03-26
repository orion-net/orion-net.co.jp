import React from "react"
import { Sidebar } from "../components/Sidebar"
import { Link } from "gatsby"
import { LinkNav } from "../components/LinkNav"
import "../../static/style.css"
import { Layout } from "../components/Layout"

const Main = () => (
  <Layout>
    <div id="main" className="site-main sp-part-top sp-main">
      <div id="contenthead" className="sp-part-top sp-content-header">
        <a style={{ display: "block" }}>
          <img
            id="sp-image-1"
            src="/img/top3.gif"
            className="sp-part-top sp-image"
          />
        </a>
        <nav
          id="sp-site-navigation-1"
          className="navigation-main button-menu sp-part-top sp-site-navigation horizontal"
          role="navigation"
        >
          <h1 className="menu-toggle">メニュー</h1>
          <div className="screen-reader-text skip-link">
            <a title="コンテンツへスキップ" href="#content">
              コンテンツへスキップ
            </a>
          </div>
          <LinkNav contact />
        </nav>
        <div id="breadcrumb-list" className="sp-part-top sp-bread-crumb">
          <div>
            <Link to="/">トップ</Link>
          </div>
          <div>›</div>
          <div>お問い合わせ</div>
        </div>
      </div>
      <div id="main-inner">
        <div id="primary" className="content-area">
          <div
            id="content"
            className="site-content sp-part-top sp-content page-contact"
            role="main"
          >
            <header
              id="sp-page-title-5"
              className="entry-header sp-part-top sp-page-title"
            >
              <h1 className="entry-title">お問い合わせ</h1>
            </header>
            <article>
              <div id="page-content" className="sp-part-top sp-block-container">
                <p className="large paragraph">
                  お問い合わせは、こちらで受付しております。
                </p>
                <h3 className="paragraph">電話・FAX</h3>
                <dl
                  id="sp-definition-list-9"
                  className="sp-part-top sp-definition-list"
                >
                  <dt>TEL</dt>
                  <dd>044-766-1610 （09:00～18:00）</dd>
                  <dt> </dt>
                  <dd>0800-800-1612 (ﾌﾘｰﾀﾞｲﾔﾙ）</dd>
                  <dt>FAX</dt>
                  <dd>044-766-1610</dd>
                </dl>
                <h3 className="paragraph">お問い合わせフォーム</h3>
                <p className="paragraph">
                  メールでのお問い合わせは、下記にて承っております。
                </p>
                <p className="paragraph">
                  お返事が遅くなる場合がございます。ご了承くださいませ。
                </p>
                <p className="paragraph">
                  ※ただいまメールがつながらない状態になっております。
                </p>
                <p className="paragraph">
                  　恐れいりますが、お問い合わせはお電話にてお願い致します。
                </p>
                <p className="large paragraph"> </p>
                <p className="paragraph">*は必須項目です。</p>
                <form
                  id="sp-form-1"
                  action=""
                  method="GET"
                  name="sp_form"
                  className="sp-part-top sp-form"
                >
                  <table>
                    <tbody>
                      <tr>
                        <th>お問い合わせ内容 *</th>
                        <td>
                          <textarea name="message" required="required" />
                        </td>
                      </tr>
                      <tr>
                        <th>お名前（漢字）*</th>
                        <td>
                          <input
                            type="text"
                            name="name-kanji"
                            required="required"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>お名前（フリガナ）*</th>
                        <td>
                          <input type="text" name="kana" required="required" />
                        </td>
                      </tr>
                      <tr>
                        <th>E-Mail*</th>
                        <td>
                          <input type="text" name="email" required="required" />
                        </td>
                      </tr>
                      <tr>
                        <th>電話番号（半角）*</th>
                        <td>
                          <input type="text" name="tel" required="required" />
                        </td>
                      </tr>
                      <tr>
                        <th>FAX番号（半角）</th>
                        <td>
                          <input type="text" name="fax" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <input type="submit" value="送信" />
                </form>
              </div>
            </article>
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  </Layout>
)

export default Main

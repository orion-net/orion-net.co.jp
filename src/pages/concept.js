import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../../static/style.css"
import { Layout } from "../components/Layout"

const Main = () => (
  <Layout currentNav={{ concept: true }} pageTitle="サロン紹介">
    <div id="primary" className="content-area">
      <div
        id="content"
        className="site-content sp-part-top sp-content page-concept"
        role="main"
      >
        <header
          id="sp-page-title-2"
          className="entry-header sp-part-top sp-page-title"
        >
          <h1 className="entry-title">サロン紹介</h1>
        </header>
        <article>
          <div id="page-content" className="sp-part-top sp-block-container">
            <h3 className="paragraph">スタッフ</h3>
            <p className="large paragraph">
              <b className="character">マネージャー：　武藤　夏代</b>
            </p>
            <p className="large paragraph"> </p>
            <p className="paragraph"> </p>
            <p className="large paragraph"> </p>
            ○スタッフ紹介
            <p className="large paragraph"> </p>
            <a style={{ display: "block" }}>
              <StaticImage
                id="sp-image-8"
                alt="sp-image-8"
                layout="fixed"
                width={228}
                height={302}
                src="../../static/img/1496900727362.jpg"
                className="sp-part-top sp-image"
              />
            </a>
            <br />
            <b className="character">武藤　大亮</b>
            <p className="paragraph">　</p>
            <a style={{ display: "block" }}>
              <StaticImage
                id="sp-image-9"
                alt="sp-image-9"
                layout="fixed"
                width={228}
                height={302}
                src="../../static/img/1496901447498.jpg"
                className="sp-part-top sp-image"
              />
            </a>
            <br />
            <b className="character">武藤　圭佑</b>
            <p className="paragraph">　　</p>
            <h3 className="paragraph">サロン</h3>
            <a style={{ display: "block" }}>
              <StaticImage
                id="sp-image-10"
                alt="sp-image-10"
                src="../../static/img/securedownload3.jpg"
                className="sp-part-top sp-image"
              />
            </a>
            <a style={{ display: "block" }}>
              <StaticImage
                id="sp-image-11"
                alt="sp-image-11"
                src="../../static/img/51.jpg"
                className="sp-part-top sp-image"
              />
            </a>
            <br />
            白を基調とした落ち着いた店内は、おくつろぎいただける空間です。{" "}
            <br />
            お客さまの髪質とご要望に合わせて、スタイルをご提案します。
            <br />
            <br />
            <a style={{ display: "block" }}>
              <StaticImage
                id="sp-image-12"
                alt="sp-image-12"
                src="../../static/img/2.jpg"
                className="sp-part-top sp-image"
              />
            </a>
            <p className="paragraph"> </p>
            <br />
            <a style={{ display: "block" }}>
              <StaticImage
                id="sp-image-13"
                alt="sp-image-13"
                src="../../static/img/4.jpg"
                className="sp-part-top sp-image"
              />
            </a>
            <br />
            180度にたおれるイスがございますので、ゆったりと施術がお受けになれます。
            <hr />
            <p className="paragraph"> </p>
            <p className="paragraph"> </p>
            <p className="paragraph"> </p>
          </div>
        </article>
      </div>
    </div>
  </Layout>
)

export default Main

import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Layout } from "../components/Layout"

const Main = () => (
  <Layout
    currentNav={{ custom3: true }}
    pageTitle="成人式・スナップ集"
    fileName="custom3.js"
  >
    <div id="primary" className="content-area">
      <div
        id="content"
        className="site-content sp-part-top sp-content page-custom3"
        role="main"
      >
        <header
          id="sp-page-title-12"
          className="entry-header sp-part-top sp-page-title"
        >
          <h1 className="entry-title">成人式・スナップ集</h1>
        </header>
        <div
          id="sp-block-container-2"
          className="sp-part-top sp-block-container"
        >
          <p className="large paragraph">
            <b className="character" style={{ color: "#9e140c" }}>
              ※転載厳禁
            </b>
          </p>
        </div>
        <a style={{ display: "block" }}>
          <StaticImage
            id="sp-image-35"
            alt="sp-image-35"
            src="../../static/img/image56.jpg"
            className="sp-part-top sp-image"
          />
        </a>
        <a style={{ display: "block" }}>
          <StaticImage
            id="sp-image-36"
            alt="sp-image-36"
            src="../../static/img/image57.jpg"
            className="sp-part-top sp-image"
          />
        </a>
        <a style={{ display: "block" }}>
          <StaticImage
            id="sp-image-37"
            alt="sp-image-37"
            src="../../static/img/image50.jpg"
            className="sp-part-top sp-image"
          />
        </a>
        <a style={{ display: "block" }}>
          <StaticImage
            id="sp-image-38"
            alt="sp-image-38"
            src="../../static/img/image51.jpg"
            className="sp-part-top sp-image"
          />
        </a>
        <a style={{ display: "block" }}>
          <StaticImage
            id="sp-image-39"
            alt="sp-image-39"
            src="../../static/img/image52.jpg"
            className="sp-part-top sp-image"
          />
        </a>
        <a style={{ display: "block" }}>
          <StaticImage
            id="sp-image-40"
            alt="sp-image-40"
            src="../../static/img/collage_photocat18.jpg"
            className="sp-part-top sp-image"
          />
        </a>
        <a style={{ display: "block" }}>
          <StaticImage
            id="sp-image-41"
            alt="sp-image-41"
            src="../../static/img/image53.jpg"
            className="sp-part-top sp-image"
          />
        </a>
        <a style={{ display: "block" }}>
          <StaticImage
            id="sp-image-42"
            alt="sp-image-42"
            src="../../static/img/image58.jpg"
            className="sp-part-top sp-image"
          />
        </a>
        <a style={{ display: "block" }}>
          <StaticImage
            id="sp-image-43"
            alt="sp-image-43"
            src="../../static/img/image59.jpg"
            className="sp-part-top sp-image"
          />
        </a>
      </div>
    </div>
  </Layout>
)

export default Main

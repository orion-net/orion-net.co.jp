import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Layout } from "../components/Layout"

const Main = () => (
  <Layout currentNav={{ concept: true }} pageTitle="サロン紹介">
    <h1 className="entry-title">サロン紹介</h1>
    <h2>スタッフ情報</h2>
    <div className="staff">
      <p>マネージャー：</p>
      <div className="manager-name">武藤　夏代</div>
    </div>
    <div className="staffs">
      <div className="staff">
        <StaticImage
          id="sp-image-9"
          alt="sp-image-9"
          layout="fixed"
          width={228}
          height={302}
          src="../../static/img/staffs/mutou-keisuke.jpg"
          className="sp-part-top sp-image"
        />
        <div className="staff-name">武藤　圭佑</div>
      </div>
    </div>
    <h2 className="paragraph">サロン内の写真</h2>
    <StaticImage
      id="sp-image-10"
      alt="sp-image-10"
      src="../../static/img/securedownload3.jpg"
      className="sp-part-top sp-image"
    />
    <StaticImage
      id="sp-image-11"
      alt="sp-image-11"
      src="../../static/img/51.jpg"
      className="sp-part-top sp-image"
    />
    <div className="discription">
      <p>白を基調とした落ち着いた店内は、おくつろぎいただける空間です。</p>
      <p>お客さまの髪質とご要望に合わせて、スタイルをご提案します。</p>
    </div>
    <StaticImage
      id="sp-image-12"
      alt="sp-image-12"
      src="../../static/img/2.jpg"
      className="sp-part-top sp-image"
    />
    <StaticImage
      id="sp-image-13"
      alt="sp-image-13"
      src="../../static/img/4.jpg"
      className="sp-part-top sp-image"
    />
    <div className="discription">
      <p>
        180度にたおれるイスがございますので、ゆったりと施術がお受けになれます。
      </p>
    </div>
  </Layout>
)

export default Main

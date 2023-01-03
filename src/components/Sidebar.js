import React from "react"

export const Sidebar = ({ editLink }) => (
  <div className="sidebar">
    <div>
      <a
        className="blog-button"
        href="https://ameblo.jp/teamorion/?frm_id=v.mypage-ameblo--myblog--blog"
      >
        ブログ
      </a>
    </div>
    <div>
      <a
        className="facebook-button"
        href="https://www.facebook.com/orionannex.orion"
      >
        Facebook
      </a>
    </div>
    <div id="sp-sns-button-1" className="sp-part-top sp-sns-button">
      <ul>
        <li>
          <iframe
            src="https://www.facebook.com/plugins/like.php?href=http%3A%2F%2Forion-net.co.jp%2Fprivacy.html&amp;layout=button_count&amp;width=120&amp;height=21&amp;send=true&amp;show_faces=true&amp;share=false&amp;action=like&amp;colorscheme=light&amp;font"
            scrolling="no"
            frameBorder="0"
            allowtransparency="true"
            style={{
              border: "none",
              overflow: "hidden",
              width: "120px",
              height: "21px",
            }}
          ></iframe>
        </li>
        <li>
          <a
            href="https://twitter.com/share"
            className="twitter-share-button"
            data-count="horizontal"
            data-lang="ja"
          >
            Tweet
          </a>
          <script
            type="text/javascript"
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
        </li>
        <li>
          <a href="https://line.me/R/msg/text/?%0D%0Ahttp%3A%2F%2Forion-net.co.jp%2Fprivacy.html">
            <img
              src="/img/linebutton_horizontal.png"
              width="82"
              height="20"
              alt=""
              style={{ border: "none" }}
            />
          </a>
        </li>
        <li>
          <a href={editLink} target="_blank" rel="noreferrer">
            このページを編集
          </a>
        </li>
      </ul>
    </div>
  </div>
)

import React from 'react'

export const Sidebar = () => (
  <div id="sidebar1" className="sp-part-top sp-sidebar">
    <div id="sp-button-1" className="sp-part-top sp-button"><a href="https://ameblo.jp/teamorion/?frm_id=v.mypage-ameblo--myblog--blog">ブログ</a></div>
    <div id="sp-button-2" className="sp-part-top sp-button"><a href="https://www.facebook.com/orionannex.orion">Face Book</a></div>
    <div id="sp-sns-button-1" className="sp-part-top sp-sns-button">
      <ul>
        <li><iframe src="https://www.facebook.com/plugins/like.php?href=http%3A%2F%2Forion-net.co.jp%2Fprivacy.html&amp;layout=button_count&amp;width=120&amp;height=21&amp;send=true&amp;show_faces=true&amp;share=false&amp;action=like&amp;colorscheme=light&amp;font" scrolling="no" frameBorder="0" allowtransparency="true" style={{border:"none", overflow:"hidden", width:"120px", height:"21px"}}></iframe></li>
        <li><a href="https://twitter.com/share" className="twitter-share-button" data-count="horizontal" data-lang="ja">Tweet</a><script type="text/javascript" src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script></li>
          <li><a href="https://line.me/R/msg/text/?%0D%0Ahttp%3A%2F%2Forion-net.co.jp%2Fprivacy.html"><img src="/img/linebutton_horizontal.png" width="82" height="20" alt="" style={{border:"none"}}/></a></li>
      </ul>
    </div>
  </div>
)

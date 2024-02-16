import React from "react"
import { Link } from "gatsby"

const LinkNav = ({
  top,
  concept,
  menu,
  products,
  "top-pick": toppick,
  reservation,
  access,
  plans,
  contact,
  privacy,
  photos,
  hamburger,
}) => (
  <div className="hamburger-menu">
    <div
      className={`bar-wrapper ${hamburger.class}`}
      onClick={hamburger.toggle}
    >
      <div className="bar bar0" />
      <div className="bar bar1" />
      <div className="bar bar2" />
    </div>

    <ul className={`navbar ${hamburger.class}`} onClick={hamburger.toggle}>
      <li className={`${top ? "current_page_item" : ""}`}>
        <Link to="/">トップページ</Link>
      </li>
      <li className={`${concept ? "current_page_item" : ""}`}>
        <Link to="/concept">サロン紹介</Link>
      </li>
      <li className={`${menu ? "current_page_item" : ""}`}>
        <Link to="/menu">メニュー</Link>
      </li>
      <li className={`${products ? "current_page_item" : ""}`}>
        <Link to="/products">商品紹介</Link>
      </li>
      <li className={`${toppick ? "current_page_item" : ""}`}>
        <Link to="/top-pick">おすすめ</Link>
      </li>
      <li className={`${reservation ? "current_page_item" : ""}`}>
        <Link to="/reservation">ご予約</Link>
      </li>
      <li className={`${access ? "current_page_item" : ""}`}>
        <Link to="/access">アクセス</Link>
      </li>
      <li className={`${plans ? "current_page_item" : ""}`}>
        <Link to="/plans">成人式・七五三</Link>
      </li>
      <li className={`${contact ? "current_page_item" : ""}`}>
        <Link to="/contact">お問い合わせ</Link>
      </li>
      <li className={`${privacy ? "current_page_item" : ""}`}>
        <Link to="/privacy">プライバシーポリシー</Link>
      </li>
      <li className={`${photos ? "current_page_item" : ""}`}>
        <Link to="/photos">成人式・スナップ集</Link>
      </li>
    </ul>
  </div>
)

export { LinkNav }

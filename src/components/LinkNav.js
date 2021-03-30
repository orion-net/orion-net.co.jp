import React from "react"
import { Link } from "gatsby"

const LinkNav = ({
  top,
  concept,
  menu,
  custom,
  custom2,
  custom1,
  access,
  concept1,
  contact,
  privacy,
  custom3,
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
      <li className={`${custom ? "current_page_item" : ""}`}>
        <Link to="/custom">商品紹介</Link>
      </li>
      <li className={`${custom2 ? "current_page_item" : ""}`}>
        <Link to="/custom2">おすすめ</Link>
      </li>
      <li className={`${custom1 ? "current_page_item" : ""}`}>
        <Link to="/custom1">ご予約</Link>
      </li>
      <li className={`${access ? "current_page_item" : ""}`}>
        <Link to="/access">アクセス</Link>
      </li>
      <li className={`${concept1 ? "current_page_item" : ""}`}>
        <Link to="/concept1">成人式・七五三</Link>
      </li>
      <li className={`${contact ? "current_page_item" : ""}`}>
        <Link to="/contact">お問い合わせ</Link>
      </li>
      <li className={`${privacy ? "current_page_item" : ""}`}>
        <Link to="/privacy">プライバシーポリシー</Link>
      </li>
      <li className={`${custom3 ? "current_page_item" : ""}`}>
        <Link to="/custom3">成人式・スナップ集</Link>
      </li>
    </ul>
  </div>
)

export { LinkNav }

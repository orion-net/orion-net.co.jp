import React from "react"
import { Link } from 'gatsby'

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
}) => (
  <ul id="menu-mainnav" class="toggled-on">
    <li class={`menu-item ${top ? 'current_page_item' : ''}`}><Link to="/">トップページ</Link></li>
    <li class={`menu-item ${concept ? 'current_page_item' : ''}`}><Link to="/concept">サロン紹介</Link></li>
    <li class={`menu-item ${menu ? 'current_page_item' : ''}`}><Link to="/menu">メニュー</Link></li>
    <li class={`menu-item ${custom ? 'current_page_item' : ''}`}><Link to="/custom">商品紹介</Link></li>
    <li class={`menu-item ${custom2 ? 'current_page_item' : ''}`}><Link to="/custom2">おすすめ</Link></li>
    <li class={`menu-item ${custom1 ? 'current_page_item' : ''}`}><Link to="/custom1">ご予約</Link></li>
    <li class={`menu-item ${access ? 'current_page_item' : ''}`}><Link to="/access">アクセス</Link></li>
    <li class={`menu-item ${concept1 ? 'current_page_item' : ''}`}><Link to="/concept1">成人式・七五三</Link></li>
    <li class={`menu-item ${contact ? 'current_page_item' : ''}`}><Link to="/contact">お問い合わせ</Link></li>
    <li class={`menu-item ${privacy ? 'current_page_item' : ''}`}><Link to="/privacy">プライバシーポリシー</Link></li>
    <li class={`menu-item ${custom3 ? 'current_page_item' : ''}`}><Link to="/custom3">成人式・スナップ集</Link></li>
  </ul>
);

export { LinkNav };
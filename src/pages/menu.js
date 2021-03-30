import React from "react"
import { Layout } from "../components/Layout"

const Main = () => (
  <Layout currentNav={{ menu: true }} pageTitle="メニュー">
    <h1>メニュー</h1>
    <div className="menu">
      <h2>カット</h2>
      <dl>
        <dt>カット＆ブロー</dt>
        <dd>4.000円（税抜）</dd>
        <dt>中学生</dt>
        <dd>3.500円（税抜）</dd>
        <dt>小学生</dt>
        <dd>2.500円（税抜）</dd>
        <dt>小学生未満</dt>
        <dd>1.500円（税抜）</dd>
        <dt>前髪・眉カット</dt>
        <dd>各 500円（税抜）</dd>
      </dl>
      <h2>パーマ (カット別）</h2>
      <dl>
        <dt>パーマ</dt>
        <dd>3.500円(税抜）より</dd>
        <dt>ホット系パーマ</dt>
        <dd>8.000円(税抜）より</dd>
        <dt>ストレートパーマ</dt>
        <dd>8.500円(税抜）より</dd>
        <dt>ノーアイロン　ストレート</dt>
        <dd>5.000円(税抜) より</dd>
        <dt>ポイントパーマ</dt>
        <dd>3.500円(税抜）より</dd>
      </dl>
      <h2>カラー　(カット別）</h2>
      <dl>
        <dt>リタッチカラー</dt>
        <dd>4.000円 (税抜）より</dd>
        <dt>バージンカラー</dt>
        <dd>4.500円（税抜）より</dd>
        <dt>ポイントカラー</dt>
        <dd>2.500円（税抜）より</dd>
      </dl>
      <h2>マニキュア　(カット別）</h2>
      <dl>
        <dt>リタッチ</dt>
        <dd>4.000円(税抜) より</dd>
        <dt>バージン</dt>
        <dd>4.500円(税抜)より</dd>
      </dl>
      <h2>トリートメント</h2>
      <dl>
        <dt>トリートメント</dt>
        <dd>1.700円(税抜)より</dd>
        <dt>水トリートメント　（スチーム）</dt>
        <dd>500円(税抜)より</dd>
      </dl>
      <h2>シャンプー・セット</h2>
      <dl>
        <dt>シャンプー</dt>
        <dd>1.000円(税抜)より 　※髪の長さにより異なります</dd>
        <dt>ワンシャンプー</dt>
        <dd>500円(税抜)より</dd>
        <dt>セット</dt>
        <dd>1.700円(税抜)より　※髪の長さにより異なります</dd>
        <dt>アップ</dt>
        <dd>3.000円(税抜)より ※ スタイルによって異なります</dd>
      </dl>
      <h2>エステ(フェイシャル）・メイク</h2>
      <dl>
        <dt>エステ</dt>
        <dd>３.000円(税抜)</dd>
        <dt>エステ（フル）</dt>
        <dd>5.000円（税抜）</dd>
        <dt>炭酸パック</dt>
        <dd>500円(税抜)</dd>
        <dt>エステプラセンタ</dt>
        <dd>2.000円(税抜)</dd>
        <dt>水エステ</dt>
        <dd>3.500円(税抜)</dd>
        <dt>ハンドマッサージ</dt>
        <dd>500円(税抜)</dd>
        <dt>メイク</dt>
        <dd>3.000円(税抜) より</dd>
      </dl>
      <h2>着付け</h2>
      <dl>
        <dt>留袖・訪問着</dt>
        <dd>7.500円（税抜)</dd>
        <dt>振袖</dt>
        <dd>10.000円（税抜）</dd>
        <dt>袴</dt>
        <dd>8.000円(税抜)</dd>
        <dt>浴衣</dt>
        <dd>4.000円(税抜)</dd>
      </dl>
      <p>
        ※成人式、着付け、ヘアメイクのご予約を承ります。
        ※七五三、卒業式等の着付けやヘアーセットもお気軽にお問い合わせください。
      </p>
    </div>
  </Layout>
)

export default Main

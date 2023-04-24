import React from 'react'
import { Link } from "gatsby"

const Sidebar = () => {
  return (
    <>
      <aside id="side">
        <ul>
          <li><Link to="/price-guide/" className="hover">
              <img src="/images/side/2.png" alt="料金のご案内" /></Link></li>
          <li><Link to="/faq/" className="hover">
              <img src="/images/side/3.png" alt="よくある質問" /></Link></li>
          <li><Link to="/goods/" className="hover">
              <img src="/images/side/4.jpg" alt="ペットとの思い出を形にする、メモリアルグッズのご紹介" /></Link></li>
          <li><a href="http://ptns.jp/jewelry/index.html" className="hover" target="_blank" rel="noopener noreferrer">
              <img src="/images/side/6.jpg" alt="ペットの遺骨を永遠の形見としてお持ちいただくオンリーワンジュエリー" /></a></li>
          <li><a href="https://www.nijinohashi-yuubinkan.com/" className="hover" target="_blank" rel="noopener noreferrer">
              <img src="/images/side/7.jpg" alt="大好きなあの子とお手紙交換「虹の橋ゆうびん館」" /></a></li>
          <li><Link to="/dryice/" className="hover">
              <img src="/images/side/8.jpg" alt="ドライアイス店のご紹介" /></Link></li>
          <li><Link to="/topics/" className="hover">
              <img src="/images/side/5.png" alt="トピックス" /></Link></li>
        </ul>
      </aside>
    </>
  )
}

export default Sidebar

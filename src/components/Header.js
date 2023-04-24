import React from 'react'
import { Link } from "gatsby"

const Header = () => {
  return (
    <>
      <header>
        <div className="wrap">
          <p id="logo"><Link to="/" className="hover"><img src="/images/header/aishin-pet-ceremony-saitama.png" alt="ペット火葬・ペット葬儀の「愛心ペットセレモ二ー埼玉」（埼玉県ふじみ野市）" /></Link></p>
          <nav id="contact">
            <ul className="float-box">
              <li id="lets-from">
                <Link to="/contactus/" className="hover"><img src="/images/header/consultation.png" alt="無料相談はこちら" /></Link>
              </li>
              <li id="lets-tel" className="pc">
                <img src="/images/header/tel-free.png" alt="埼玉でペット火葬・ペット葬儀場をお探しならフリーダイヤル：0120-36-2484まで" />
              </li>
              <li id="call" className="sp">
                <a href="tel:0492920047"><img src="/images/header/tel.png" alt="電話をかける" /></a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
    </>
  )
}

export default Header

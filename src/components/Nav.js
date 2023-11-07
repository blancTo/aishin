import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Nav = () => {
  return (
    <>
      <section id='navi'>
        <nav>
          <p id='sp-menu' className='sp'>
            <label className='open' htmlFor='pop-up'>
              <StaticImage src='../images/nav/menu.png' width={100} height={26} loading='lazy' alt='メニュー開閉ボタン' />
            </label>
          </p>
          <input type='checkbox' id='pop-up' />
          <div className='overlay'>
            <div className='window'>
              <ul className='float-box'>
                <li>
                  <Link to='/price-guide/' className='hover'>
                    <span>
                      <StaticImage src='../images/nav/1.png' width={30} height={30} loading='lazy' alt='埼玉のペット葬儀・火葬「愛心ペットセレモニー」の料金のご案内' />
                    </span>
                    料金のご案内
                  </Link>
                </li>
                <li>
                  <Link to='/flow-funeral/' className='hover'>
                    <span>
                      <StaticImage src='../images/nav/22.png' width={30} height={30} loading='lazy' alt='埼玉のペット葬儀・火葬「愛心ペットセレモニー」の葬儀の流れ' />
                    </span>
                    葬儀の流れ
                  </Link>
                </li>
                <li>
                  <Link to='/guidance-business/' className='hover'>
                    <span>
                      <StaticImage src='../images/nav/3.png' width={30} height={30} loading='lazy' alt='埼玉のペット葬儀・火葬「愛心ペットセレモニー」の業務のご案内' />
                    </span>
                    業務のご案内
                  </Link>
                </li>
                <li>
                  <Link to='/service-area/' className='hover'>
                    <span>
                      <StaticImage src='../images/nav/4.png' width={30} height={30} loading='lazy' alt='埼玉のペット葬儀・火葬「愛心ペットセレモニー」のサービスエリア' />
                    </span>
                    サービスエリア
                  </Link>
                </li>
                <li>
                  <Link to='/goods/' className='hover'>
                    <span>
                      <StaticImage src='../images/nav/7.png' width={30} height={30} loading='lazy' alt='埼玉のペット葬儀・火葬「愛心ペットセレモニー」の商品のご案内' />
                    </span>
                    商品のご案内
                  </Link>
                </li>
                <li>
                  <Link to='/faq/' className='hover'>
                    <span>
                      <StaticImage src='../images/nav/6.png' width={30} height={30} loading='lazy' alt='よくあるご質問' />
                    </span>
                    よくあるご質問
                  </Link>
                </li>
                <li>
                  <Link to='/access/' className='hover'>
                    <span>
                      <StaticImage src='../images/nav/55.png' width={30} height={30} loading='lazy' alt='埼玉のペット葬儀・火葬「愛心ペットセレモニー」のアクセス情報' />
                    </span>
                    アクセス
                  </Link>
                </li>
                <li className='sp' id='close'>
                  <StaticImage src='../images/nav/0.png' width={30} height={30} loading='lazy' alt='メニュー開閉ボタン' />
                  <label className='close' htmlFor='pop-up'>
                    閉じる
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Nav;

import React from 'react';

import { graphql, Link } from 'gatsby';

import { StaticImage } from 'gatsby-plugin-image';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import Seo from '../components/Seo';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Mainimege from '../components/Mainimege';
import Footer from '../components/Footer';
import TopCalender from '../components/TopCalender';

export default function Home({ data }) {
  return (
    <>
      <Header />

      <p id='page-top'>
        <AnchorLink offset='0' to='#pagetop' title='Pagetop'>
          <FontAwesomeIcon icon={faChevronUp} />
        </AnchorLink>
      </p>

      <Mainimege />

      <Nav />

      <div className='index' id='main'>
        <section className='container'>
          <div className='wrap center'>
            <h2 className='serif'>大切な家族（ペット）とのお別れの日が訪れたら・・</h2>
            <p>別れを経験した者だからこそ深い悲しみを理解し、心のこもった供養で愛するペットを天国へと送り届けてあげれる。それが私たちにできるお手伝いだと考えています。</p>
            <p>愛心ペットセレモニー埼玉ではペット火葬・葬儀・納骨・仏具・お墓・動物霊園・・まで、全てのサービスをご提供させて頂いております。</p>
            <h3 className='color3 h2'>お客様満足度100%を目標に！</h3>
            <p>お客様から信頼をいただき安心してご供養をお任せいただけるよう心を込めたペット葬儀サービスを心がけご奉仕させていただいております。</p>
            <p>当施設は、お客様から新たなお客様を自信を持ってご紹介していただく事ができるようなペット葬儀サービスを原点としています。</p>
            <p>100年先も200年先も変わらぬよう、愛するペットさんのご供養とお客様の心のケアに努め、先祖のペットさんを大切に守って行けるよう精進していきます。</p>
          </div>
        </section>

        <section className='container gray'>
          <div className='wrap center'>
            <div id='cremation-menu' className='float-box'>
              <dl>
                <dt>
                  お立会ペット火葬<span>お持込</span>
                </dt>
                <dd>
                  18,000<span>円～</span>
                </dd>
              </dl>
              <dl>
                <dt>
                  個別一任ペット火葬<span>48h返骨</span>
                </dt>
                <dd>
                  17,000<span>円～</span>
                </dd>
              </dl>
              <dl className='sp-both'>
                <dt>
                  お引取個別ペット火葬<span>納骨含</span>
                </dt>
                <dd>
                  16,000<span>円～</span>
                </dd>
              </dl>
              <dl>
                <dt>
                  お引取合同ペット火葬<span>納骨含</span>
                </dt>
                <dd>
                  12,000<span>円～</span>
                </dd>
              </dl>
            </div>
            <p>
              愛心ペットセレモニー埼玉では、愛する家族（ペット）のために、ご家族皆様でしっかりとしたご供養をしていただけるよう、過剰な設備投資を抑え低価格に設定させていただいております。
              <br />
              ペット火葬は、犬さん・猫さん・うさぎさんはもちろん、小さな小鳥さんも対応可能です。※大型犬は２５ｋｇまで。
            </p>
            <section id='service-area'>
              <h3>ペット火葬・葬儀サービス提供エリア</h3>
              <p>
                埼玉県（川越市・富士見市・三芳町・新座市・志木市・朝霞市・所沢市・狭山市・さいたま市・入間市・ふじみ野市） ・ 東京都（清瀬市）
                <br />
                ※立会いペット火葬のご送迎には対応しておりません。
              </p>
              <div className='detail-btn fee'>
                <Link to='/price-guide/' className='hover'>
                  料金の詳細はこちら
                </Link>
              </div>
              <div className='detail-btn area'>
                <Link to='/service-area/' className='hover'>
                  対応エリア詳細はこちら
                </Link>
              </div>
            </section>
          </div>
        </section>

        <section className='container'>
          <div className='wrap'>
            <h5 className='midasi'>
              <span>
                <img src='/images/icon/1.png' width={21} height={21} loading='lazy' alt='営業お知らせアイコン' />
              </span>
              営業のお知らせ
            </h5>

            <div id='business-day'>
              <section id='eigyo-cal'>
                <TopCalender />

                <p className='teikyu_txt'>定休日</p>
              </section>

              <section id='business-info'>
                <article>
                  <div
                    className='eigyo-info'
                    dangerouslySetInnerHTML={{
                      __html: data.microcmsNotice.txt,
                    }}
                  />
                </article>
                <section id='contact-information'>
                  <div id='contact-information-box'>
                    <dl id='free-dial'>
                      <div>
                        <dd className='ruby'>みおくろう　にじのはし</dd>
                        <dt>0120-36-2484</dt>
                      </div>
                    </dl>
                    <dl id='mobile-php'>
                      <dt>携帯・ＰＨＰの方は</dt>
                      <dd>049-292-0047</dd>
                    </dl>
                  </div>
                  <dl id='reception-time'>
                    <dd>不定休・電話受付7:00～23:00&nbsp;&nbsp;※接客中、一時的に電話に出れない場合がございます。</dd>
                  </dl>
                  <div id='free-consultation'>
                    <Link to='/contactus/' className='hover'>
                      お問い合わせは
                      <br />
                      こちら
                      <img src='/images/arrow1.png' width={9} height={22} loading='lazy' alt='お問い合わせ矢印' />
                    </Link>
                  </div>
                </section>
                <section id='bikke'>
                  <div id='idp'>
                    <StaticImage src='../images/top/bikke.png' width={160} height={160} loading='lazy' alt='猫のビッケの写真' />
                  </div>
                  <div id='introduction'>
                    <h6>
                      <StaticImage src='../images/top/hbikke.png' width={280} height={36} loading='lazy' alt='ペット火葬・葬儀「愛心ペットセレモニー埼玉」店長のご紹介' />
                    </h6>
                    <p>施設店長猫の（ビッケ）です。癒しを担当しています。　がっ… たまにサボって遊びにイっちゃいます！</p>
                  </div>
                </section>
              </section>
              <div className='both' />
            </div>
          </div>
        </section>

        <section className='container green'>
          <div className='wrap'>
            <h5 className='midasi'>
              <span>
                <img src='/images/icon/2.png' width={30} height={27} loading='lazy' alt='ペット火葬・葬儀サービス案内犬のアイコン' />
              </span>
              ペット火葬・葬儀サービスのご案内
            </h5>
            <div className='flex-box'>
              <section className='service-pake'>
                <div className='service_img'>
                  <StaticImage src='../images/top/1.jpg' width={186} height={132} loading='lazy' alt='ペット斎場火葬' />
                </div>
                <section>
                  <h2>ペット火葬・葬儀</h2>
                  <p>当施設（ペット火葬場）は、固定炉でのペット火葬を執り行っております。猫ちゃん及び、小型犬～大型犬までお立ち会いができます。</p>
                  <p>
                    <a className='hover' href='/guidance-business/'>
                      詳細はこちら
                    </a>
                  </p>
                </section>
              </section>
              <section className='service-pake'>
                <div className='service_img'>
                  <StaticImage src='../images/top/2.jpg' width={186} height={132} loading='lazy' alt='ペット葬儀・ホームセレモニー' />
                </div>
                <section>
                  <h2>ホームセレモニー</h2>
                  <p>
                    火葬後のご遺骨はどうなさっていますか？自宅向けのペット墓石を造りご供養されてはいかがでしょう。
                    <br />
                    <br />
                  </p>
                  <p>
                    <Link to='/guidance-business/#mark2' className='hover'>
                      詳細はこちら
                    </Link>
                  </p>
                </section>
              </section>
              <section className='service-pake'>
                <div className='service_img'>
                  <StaticImage src='../images/top/3.jpg' width={186} height={132} loading='lazy' alt='ペット納骨場' />
                </div>
                <section>
                  <h2>納骨サービス</h2>
                  <p>
                    斎場に併設されたペット霊園の慰霊塔に納骨致します。合同納骨となりますが、毎日丁寧な供養を行います。
                    <br />
                    <br />
                  </p>
                  <p>
                    <Link to='/price-guide/#mark2' className='hover'>
                      詳細はこちら
                    </Link>
                  </p>
                </section>
              </section>
              <section className='service-pake'>
                <div className='service_img'>
                  <StaticImage src='../images/top/4.jpg' width={186} height={132} loading='lazy' alt='ペットの粉骨サービス' />
                </div>
                <section>
                  <h2>粉骨サービス</h2>
                  <p>愛するわが子を海や山・・または自宅の庭へ散骨してあげたい。温もりを感じさせる形に遺したいという方々へのサービスです。</p>
                  <p>
                    <Link to='/guidance-business/#mark4' className='hover'>
                      詳細はこちら
                    </Link>
                  </p>
                </section>
              </section>
              <section className='service-pake'>
                <div className='service_img'>
                  <StaticImage src='../images/top/5.jpg' width={186} height={132} loading='lazy' alt='メモリアルジュエリー' />
                </div>
                <section>
                  <h2>メモリアルジュエリー</h2>
                  <p>
                    メモリアルジュエリーは、大切なパートナーのお遺骨を樹脂で特殊加工し永遠の形見としてお持ちいただくオンリーワンジュエリー。
                    <br />
                    <span style={{ color: '#f07020', fontSize: '85%' }}>制作をしばらく間お休みいたします。</span>
                  </p>
                  <p>
                    <a href='http://ptns.jp/jewelry/index.html' className='hover' target='_blank' rel='noopener noreferrer'>
                      詳細はこちら
                    </a>
                  </p>
                </section>
              </section>
              <section className='service-pake'>
                <div className='service_img'>
                  <StaticImage src='../images/top/6.jpg' width={186} height={132} loading='lazy' alt='虹の橋ゆうびん館' />
                </div>
                <section>
                  <h2>虹の橋ゆうびん館（お手紙）</h2>
                  <p>
                    「虹の橋のたもと」にいる大好きな子にお手紙を書いてみませんか？　2～3週間後、あの子から「写真入りオリジナルメッセージ」が届きます。
                    <br />
                    <span style={{ color: '#f07020', fontSize: '92%', fontWeight: 'bold' }}>当施設にてご購入いただけます。</span>
                  </p>
                  <p>
                    <a href='https://www.nijinohashi-yuubinkan.com/' className='hover' target='_blank' rel='noopener noreferrer'>
                      詳細はこちら
                    </a>
                  </p>
                </section>
              </section>
            </div>
          </div>
        </section>

        <section className='container'>
          <div className='wrap dryice'>
            <div className='dryice-inner'>
              <div className='img'>
                <StaticImage src='../images/top/dryice.jpg' width={403} height={269} loading='lazy' alt='ドライアイスの写真' />
              </div>
              <div className='txt'>
                <h2 className='midasi3'>
                  <span>
                    <img src='/images/icon/5.png' width={26} height={21} loading='lazy' alt='ドライアイス店の紹介／雪のアイコン' />
                  </span>
                  ドライアイス店のご紹介
                </h2>
                <p>大事なペットさんをきれいな状態で送り出してあげるために必要なドライアイス。こちらではドライアイスを購入できるお店をいくつかご紹介したいと思います。</p>
                <div className='detail-btn area'>
                  <Link to='/dryice/' className='hover'>
                    詳細はこちら
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='container t-box'>
          <div className='wrap'>
            <article id='topics'>
              <div className='float-box'>
                <section id='topics-header'>
                  <h2>トピックス</h2>
                  <p>
                    <Link to='/topics/'>&gt;&nbsp;一覧を見る</Link>
                  </p>
                  <div className='both'></div>
                </section>
                {data.allMicrocmsTopics.edges.map(({ node }) => (
                  <dl className='news' key={node.topicsId}>
                    <dt>{node.date}</dt>
                    <dd>
                      <Link to={'/topics/' + node.category.slug + '/' + node.topicsId + '/'}>{node.title}</Link>
                      <br />
                      {node.excerpt}...
                    </dd>
                  </dl>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className='container'>
          <div className='wrap'>
            <article className='poem'>
              <div className='poem-rb'>
                <Link to='/topics/news/w3l1rlm63/'>
                  <StaticImage src='../images/top/RainbowBridge.jpg' width={646} height={430} loading='lazy' alt='虹の橋のお話' />
                </Link>
              </div>
              <div className='poem-tc'>
                <Link to='/topics/news/n5oyirg6s/'>
                  <StaticImage src='../images/top/TenCommandments.jpg' width={646} height={430} loading='lazy' alt='犬の十戒のお話' />
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section className='container pink'>
          <div className='wrap investigation'>
            <h2 className='midasi2'>
              <span>
                <img src='/images/icon/4.png' width={30} height={27} loading='lazy' alt='ばい煙測定調査アイコン' />
              </span>
              火葬炉の「ばい煙測定調査」実施
            </h2>
            <div className='flex-wrap'>
              <StaticImage src='../images/cremator.jpg' className='investigation_img' width={330} height={267} loading='lazy' alt='ペットの火葬炉' />
              <div className='investigation_txt'>
                <p>
                  愛心ペットセレモニーでは、埼玉県の条例を遵守し、ペット火葬炉の「ばい煙測定調査」を年2回実施しています。
                  <br />
                  移動火葬車には環境測定の義務がないものの、固定火葬炉には義務付けられています。
                  <br />
                  ばい塵濃度は、埼玉県の規制基準の約34分の1、塩化水素濃度は50分の1と、もはや測定の意義すら考えさせられるほど埼玉県の環境基準を大幅にクリアしています。
                  <br />
                  測定費用は高額にかかるのですが、定期的な点検や安全に火葬炉を稼動させるための維持管理の一環でもありますし、何よりもご利用いただくお客様から安心してお任せいただけるようしっかりと条例を遵守し測定しておりますので、どうぞ安心してご利用下さい。
                </p>
                <a href='/images/investigation2023-09.pdf' target='_blank' rel='noopener noreferrer'>
                  最新測定調査証 （PDF）
                </a>
              </div>
            </div>
          </div>
        </section>
        <aside id='links'>
          <ul className='wrap'>
            <li>
              <a href='https://www.petsatooyakai.com/' className='hover' target='_blank' rel='noopener noreferrer'>
                <StaticImage src='../images/footer/bunner_satooyakai.jpg' width={239} height={65} loading='lazy' alt='NPO法人ペット里親会' />
              </a>
            </li>
            <li>
              <a href='http://www.petsougi.net/' className='hover' target='_blank' rel='noopener noreferrer'>
                <StaticImage src='../images/footer/bunner_anshin.jpg' width={155} height={64} loading='lazy' alt='ペット葬儀・霊園ネットの安心マーク' />
              </a>
            </li>
            <li>
              <a href='http://www.pet-farewell.net/' className='hover' target='_blank' rel='noopener noreferrer'>
                <StaticImage src='../images/footer/bunner_sougimap.jpg' width={120} height={60} alt='ペット葬儀マップ' />
              </a>
            </li>
          </ul>
        </aside>
      </div>
      <Footer />
    </>
  );
}

const jsonN = '埼玉県のペット火葬・葬儀なら｜愛心ペットセレモ二ー埼玉【公式】',
  jsonD = '埼玉のペット火葬・葬儀のことなら 愛心ペットセレモニー埼玉 にお任せ下さい。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://aishin2484.jp/#website',
      url: 'https://aishin2484.jp/',
      name: `${jsonN}`,
      description: `${jsonD}`,
      inLanguage: 'ja',
      publisher: {
        '@id': 'https://aishin2484.jp/#organization',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://aishin2484.jp/#organization',
      name: `${jsonN}`,
      description: `${jsonD}`,
      url: 'https://aishin2484.jp/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://aishin2484.jp/images/logo.png',
      },
      sameAs: ['https://www.facebook.com/aishin2484', 'https://twitter.com/aishin2484', 'https://www.instagram.com/aishin2484'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+81-48-272-2484',
      contactType: 'customer service',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://aishin2484.jp/#webPage',
      url: 'https://aishin2484.jp/',
      name: `${jsonN}`,
      description: `${jsonD}`,
      inLanguage: 'ja',
      datePublished: '2022-12-19T01:06:53+09:00',
      dateModified: '2023-03-18T3:00:07+09:00',
    },

    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: '埼玉県のペット火葬・葬儀なら｜愛心ペットセレモ二ー埼玉【公式】',
          item: 'https://aishin2484.jp/',
        },
      ],
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'さいたま市',
      addressRegion: '埼玉県',
      postalCode: '336-0014',
      streetAddress: '大宮区堀の内町2-122',
    },
  ],
};

export const Head = () => (
  <>
    <body id='pagetop' />
    <Seo />
    <script type='application/ld+json'>{JSON.stringify(jsonLd)}</script>
  </>
);

export const query = graphql`
  query {
    allMicrocmsTopics(limit: 5, sort: { date: DESC }) {
      edges {
        node {
          title
          topicsId
          slug
          date(formatString: "YYYY年MM月DD日")
          category {
            slug
            name
            id
          }
          excerpt
        }
      }
    }
    microcmsNotice {
      txt
    }
  }
`;

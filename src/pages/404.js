import React from 'react'

import { Link } from "gatsby"

import Seo from '../components/Seo';
import Header from '../components/Header';
import Nav from '../components/Nav';
import BreadCrumb from '../components/BreadCrumb';
import PageTitle from '../components/PageTitle';
import PageTop from '../components/PageTop';
import Layout from '../components/Layout';

const pagemeta = {
    subTitle:`ページが見つかりません`,
    slug:`notfound`
}

export default function NotFound() {
  return (
    <>      
        <Header />
        <Nav />
        <PageTop slug={pagemeta.slug} />
        <section id="page-info" className="notfound">
        <BreadCrumb
        title={pagemeta.subTitle}
        slug="404"
        />
        <PageTitle
        title={pagemeta.subTitle}
        slug={pagemeta.slug}
        />
      </section>
        <Layout>

        <h2 className="page_title01 mt0">お探しの記事は見つかりませんでした。</h2>
          <p className="center">愛心ペットセレモニーのWEBサイトをご覧頂きありがとうございます。<br />
          大変申し訳ないのですが、あなたがアクセスしようとしたページは削除されたかURLが変更されています。<br />
          お手数をおかけしますが、以下の方法からもう一度目的のページをお探し下さい。</p>
          <p className="center"><Link to="/" className='bt01'>トップページへ戻る</Link></p>


        </Layout>
    </>
  )
}

const jsonN = "ページが見つかりません｜埼玉県のペット火葬・葬儀なら｜愛心ペットセレモ二ー埼玉【公式】",
jsonS = "404",
jsonD = "お探しのページは、移動または削除された可能性があります。";

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${jsonN}`,
    "description": `${jsonD}`,
    "url": `https://www.aishin2484.jp/${jsonS}/`,
    "inLanguage": "ja",
    "publisher": {
        "@type": "Organization",
        "name": "埼玉県のペット火葬・葬儀なら｜愛心ペットセレモ二ー埼玉【公式】"
    },
    "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "埼玉県のペット火葬・葬儀なら｜愛心ペットセレモ二ー埼玉【公式】",
                "item": "https://www.aishin2484.jp/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": `${jsonN}`,
                "item": `https://www.aishin2484.jp/${jsonS}/`
            }
        ]
    },
    "datePublished": "2022-12-19T01:06:53+09:00",
    "dateModified": "2023-03-18T3:00:07+09:00"
}

export const Head = () => (
  <>
    <Seo
      title2="ページが見つかりません｜埼玉県のペット火葬・葬儀なら｜愛心ペットセレモ二ー埼玉【公式】"
      description="お探しのページは、移動または削除された可能性があります。"
    />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
)
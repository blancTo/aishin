import React from 'react'
import { Link,graphql } from 'gatsby'

import LayoutTopics from '../../../components/LayoutTopics'
import Seo from '../../../components/Seo';
import Header from '../../../components/Header';
import Nav from '../../../components/Nav';
import BreadCrumb from '../../../components/BreadCrumb';
import PageTitle from '../../../components/PageTitle';
import PageTop from '../../../components/PageTop';

const pagemeta = {
    subTitle:`コラム`,
    slug:`column`
}

const column = ({data}) => {
  return (
    <>
        
        <Header />
        <Nav />
        <PageTop slug={pagemeta.slug} />
            <section id="page-info" className="topics">
        <BreadCrumb
        title={pagemeta.subTitle}
        slug="column"
        />
        <PageTitle
        title={pagemeta.subTitle}
        slug={pagemeta.slug}
        />
        </section>
        <LayoutTopics>
            
            <section id="main">
              <h1 id="display-item">{pagemeta.subTitle}の記事一覧</h1>
            
                {data.allMicrocmsTopics.edges.map(({ node }) => (
                    <article className="list">
                      <p className="date">
                        <span className='cat_list'>{node.category.name}</span>
                        <span className="blobdate">{node.date}</span>
                      </p>
                      <div className="rack">
                        <h1 className="arrange">
                          <Link to={'/topics/' + node.topicsId + '/'}>{node.title}</Link>
                        </h1>
                        <p className="preface">
                          <Link to={'/topics/' + node.topicsId + '/'}>{node.excerpt}</Link>
                        </p>
                      </div>
                    </article>
                ))}
            </section>
        </LayoutTopics>
    </>
  )
}

export default column

export const query = graphql`
query {
    allMicrocmsTopics(filter: {category: {slug: {eq: "column"}}}, limit: 20) {
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
            body
          }
        }
      }
}
`

const jsonLd = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"BreadcrumbList",
      "@id":"https://www.aishin2484.jp/topics/column/#breadcrumblist",
      "itemListElement":[
        {
          "@type":"ListItem",
          "@id":"https://www.aishin2484.jp/#listItem",
          "position":1,
          "item":{
            "@type":"WebPage",
            "@id":"https://www.aishin2484.jp/",
            "name":"埼玉県のペット火葬・葬儀なら｜愛心ペットセレモ二ー埼玉【公式】",
            "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」にお任せ下さい。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
            "url":"https://www.aishin2484.jp/"
          },
          "nextItem":"https://www.aishin2484.jp/topics/#listItem"
        },
        {
          "@type":"ListItem",
          "@id":"https://www.aishin2484.jp/topics/#listItem",
          "position":2,
          "item":{
            "@type":"WebPage",
            "@id":"https://www.aishin2484.jp/topics/",
            "name":"埼玉県のペット火葬・葬儀なら｜愛心ペットセレモ二ー埼玉【公式】｜コラムの最近の記事一覧",
            "description":"埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のコラムの最近の記事一覧。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。",
            "url":"https://www.aishin2484.jp/topics/"
          },
          "nextItem":"https://www.aishin2484.jp/topics/column/#listItem"
        },
        {
          "@type":"ListItem",
          "@id":"https://www.aishin2484.jp/topics/column/#listItem",
          "position":3,
          "item":{
            "@type":"WebPage",
            "@id":"https://www.aishin2484.jp/topics/column/",
            "name":"埼玉県のペット火葬・葬儀なら｜愛心ペットセレモ二ー埼玉【公式】｜トピックスの最近の記事一覧",
            "description":"埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のブログの最近の記事一覧。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。",
            "url":"https://www.aishin2484.jp/topics/column/"
          },
          "previousItem":"https://www.aishin2484.jp/topics/#listItem"
        },
      ]
    },
    {
      "@type":"Person",
      "@id":"https://www.aishin2484.jp/topics/column/#person"
    },
    {
      "@type":"WebPage",
      "@id":"https://www.aishin2484.jp/topics/column/#webpage",
      "url":"https://www.aishin2484.jp/topics/column/",
      "name":"埼玉県のペット火葬・葬儀なら｜愛心ペットセレモ二ー埼玉【公式】｜コラムの最近の記事一覧",
      "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のコラムの最近の記事一覧。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
      "inLanguage":"ja",
      "isPartOf":{
        "@id":"https://www.aishin2484.jp/topics/column/#website"
      },
      "breadcrumb":{
        "@id":"https://www.aishin2484.jp/topics/column/#breadcrumblist"
      },
      "datePublished":"2022-12-19T01:06:53+09:00",
      "dateModified":"2023-01-05T3:00:07+09:00"
    },
    {
      "@type":"WebSite",
      "@id":"https://www.aishin2484.jp/topics/column/#website",
      "url":"https://www.aishin2484.jp/topics/column/",
      "name":"埼玉県のペット火葬・葬儀なら｜愛心ペットセレモ二ー埼玉【公式】｜コラムの最近の記事一覧",
      "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のコラムの最近の記事一覧。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
      "inLanguage":"ja",
      "publisher":{
        "@id":"https://www.aishin2484.jp/topics/column/#person"
      }
    }
  ]
}

export const Head = () => (
  <>
    <body id="pagetop" />
    <Seo
      title={pagemeta.subTitle + '｜埼玉県のペット火葬・葬儀なら｜愛心ペットセレモ二ー埼玉【公式】'}
      description="コラムの記事一覧ページです"
    />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
)
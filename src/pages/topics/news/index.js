import React from 'react'
import { Link,graphql } from 'gatsby'

import LayoutTopics from '../../../components/LayoutTopics'
import Seo from '../../../components/Seo';
import Header from '../../../components/Header';
import Nav from '../../../components/Nav';
import BreadCrumbCat from '../../../components/BreadCrumbCat';
import PageTitle from '../../../components/PageTitle';

import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

const pagemeta = {
    subTitle:`お知らせ`,
    slug:`news`
}

const news = ({data}) => {
  return (
    <>
      
      <Header />
      <Nav />
      
      {data.allMicrocmsTopics.edges.map(({ node }) => (
        <p id="page-top">
          <AnchorLink offset="0" to={'/topics/' + node.category.slug + '/#pagetop'} title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink>
        </p>
      ))}

      <section id="page-info" className="topics">
        <BreadCrumbCat
        title={pagemeta.subTitle}
        slug="news"
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
                <Link to={'/topics/' + node.category.slug}>{node.category.name}</Link>
                <span className="blobdate">{node.date}</span>
              </p>
              <div className="rack">
                <h1 className="arrange">
                  <Link to={'/topics/' + node.category.slug + '/' + node.topicsId + '/'}>{node.title}</Link>
                </h1>
                <p className="preface">
                  <Link to={'/topics/' + node.category.slug + '/' + node.topicsId + '/'}>
                    {node.excerpt}
                  </Link>
                </p>
              </div>
            </article>
          ))}
        </section>
      </LayoutTopics>
    </>
  )
}

export default news

export const query = graphql`
query {
  allMicrocmsTopics(filter: {category: {slug: {eq: "news"}}}, limit: 30) {
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
      "@id":"https://aishin2484.jp/topics/news/#breadcrumblist",
      "itemListElement":[
        {
          "@type":"ListItem",
          "@id":"https://aishin2484.jp/#listItem",
          "position":1,
          "item":{
            "@type":"WebPage",
            "@id":"https://aishin2484.jp/",
            "name":"埼玉県のペット火葬・葬儀なら｜愛心ペットセレモ二ー埼玉【公式】",
            "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」にお任せ下さい。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
            "url":"https://aishin2484.jp/"
          },
          "nextItem":"https://aishin2484.jp/topics/#listItem"
        },
        {
          "@type":"ListItem",
          "@id":"https://aishin2484.jp/topics/#listItem",
          "position":2,
          "item":{
            "@type":"WebPage",
            "@id":"https://aishin2484.jp/topics/",
            "name":"埼玉県のペット火葬・葬儀なら｜愛心ペットセレモ二ー埼玉【公式】｜トピックスの最近の記事一覧",
            "description":"埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のお知らせの最近の記事一覧。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。",
            "url":"https://aishin2484.jp/topics/"
          },
          "nextItem":"https://aishin2484.jp/topics/news/#listItem"
        },
        {
          "@type":"ListItem",
          "@id":"https://aishin2484.jp/topics/news/#listItem",
          "position":3,
          "item":{
            "@type":"WebPage",
            "@id":"https://aishin2484.jp/topics/news/",
            "name":"埼玉県のペット火葬・葬儀なら｜愛心ペットセレモ二ー埼玉【公式】｜トピックスの最近の記事一覧",
            "description":"埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のブログの最近の記事一覧。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。",
            "url":"https://aishin2484.jp/topics/news/"
          },
          "previousItem":"https://aishin2484.jp/topics/#listItem"
        },
      ]
    },
    {
      "@type":"Person",
      "@id":"https://aishin2484.jp/topics/news/#person"
    },
    {
      "@type":"WebPage",
      "@id":"https://aishin2484.jp/topics/news/#webpage",
      "url":"https://aishin2484.jp/topics/news/",
      "name":"埼玉県のペット火葬・葬儀なら｜愛心ペットセレモ二ー埼玉【公式】｜お知らせの最近の記事一覧",
      "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のお知らせの最近の記事一覧。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
      "inLanguage":"ja",
      "isPartOf":{
        "@id":"https://aishin2484.jp/topics/news/#website"
      },
      "breadcrumb":{
        "@id":"https://aishin2484.jp/topics/news/#breadcrumblist"
      },
      "datePublished":"2022-12-19T01:06:53+09:00",
      "dateModified":"2023-01-05T3:00:07+09:00"
    },
    {
      "@type":"WebSite",
      "@id":"https://aishin2484.jp/topics/news/#website",
      "url":"https://aishin2484.jp/topics/news/",
      "name":"埼玉県のペット火葬・葬儀なら｜愛心ペットセレモ二ー埼玉【公式】｜お知らせの最近の記事一覧",
      "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のお知らせの最近の記事一覧。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
      "inLanguage":"ja",
      "publisher":{
        "@id":"https://aishin2484.jp/topics/news/#person"
      }
    }
  ]
}

export const Head = () => (
  <>
    <body id="pagetop" />
    <Seo
      title={pagemeta.subTitle + ' | 埼玉県のペット火葬・葬儀なら｜愛心ペットセレモ二ー埼玉【公式】'}
      description="お知らせの記事一覧ページ"
    />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
)
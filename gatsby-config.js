/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "埼玉県のペット火葬・葬儀なら｜愛心ペットセレモ二ー埼玉【公式】",
    keyword:"ペット火葬,ペット葬儀,火葬場,埼玉県,ふじみ野市,さいたま市,川越市,所沢市,新座市,朝霞市,狭山市",
    description: "埼玉のペット火葬・葬儀なら愛心ペットセレモニー埼玉へ。犬や猫はもちろん、うさぎや小鳥の火葬・葬儀も対応しています。さいたま市、川越市、所沢市、新座市、朝霞市、狭山市など埼玉県内のサービス提供エリアです。最高のお別れを、愛するペットと共に。お気軽にお問い合わせください。",
    image: "/images/ogp.jpg",
    url: "https://aishin2484.jp",
    siteUrl: "https://aishin2484.jp",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 75, //デフォルトは50
        },
      },
    },
    
    {
      resolve: `gatsby-transformer-remark`,
      options: {        
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    },    

    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.API_KEY,
        serviceId: 'aishin2484',
        apis: [
          {
            endpoint: 'topics',
          },
          {
            endpoint: "category",
          },
          {
            endpoint: 'notice',
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://aishin2484.jp/`,
      },
    },    
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: '/',
        excludes: ['/kawagoe','/saitama']
      }
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://aishin2484.jp/`,
        sitemap: `https://aishin2484.jp/sitemap-0.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
       

    `gatsby-plugin-sass`,
  ],
}

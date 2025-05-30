require('dotenv').config({ path: `.env` });

module.exports = {
  siteMetadata: {
    title: 'Coniagas',
    siteUrl: 'https://coniagas.com',
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://coniagas.com',
        sitemap: 'https://coniagas.com/sitemap-0.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/media/common/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        serialize: (page) => {
          const date = new Date();

          return {
            url: page.path,
            lastmod: date.toISOString().slice(0, 10),
          };
        },
      },
    },
    {
      resolve: 'gatsby-omni-font-loader',
      options: {
        enableListener: true,
        preconnect: ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
        web: [
          {
            name: 'Poppins',
            file: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@utils': 'src/utils',
          '@media': 'src/media',
          '@components': 'src/components',
        },
        extensions: ['js'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/locales`,
        name: 'locale',
      },
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        localeJsonSourceName: 'locale',
        languages: ['en', 'fr'],
        defaultLanguage: 'en',
        siteUrl: 'http://localhost:8000',
        i18nextOptions: {
          react: {
            transKeepBasicHtmlNodesFor: ['br', 'b', 'span', 'mark', 'i'],
            defaultTransParent: 'p',
          },
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false,
              withWebp: true,
              loading: 'lazy',
            },
          },
        ],
      },
    },
  ],
};

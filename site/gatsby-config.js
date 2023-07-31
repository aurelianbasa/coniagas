const fontFile = require('./src/@elegantstack/solid-ui-theme/typography-fonts.json')

module.exports = {
  plugins: [
    {
      resolve: '@elegantstack/gatsby-theme-flexiblocks',
      options: {
        createDemoPages: false,
        colorMode: false
      }
    },
    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-science',
      options: {
        fonts: fontFile.fonts,
        darkMode: false,
        colorMode: false,
        basePath: '/news'
      }
    },
<<<<<<< HEAD
<<<<<<< HEAD

    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-science',
      options: {
        basePath: '/news',
        siteUrl: 'https://coniagas.netlify.app',
        fonts: fontFile.fonts,
        services: {
          algolia: true
          // mailchimp: true
        },
        sources: {
          contentful: true,
          local: false
        }
      }
    },



=======
>>>>>>> parent of 53bc80b (who knows)
=======
>>>>>>> parent of 53bc80b (who knows)
    // {
    //   resolve: 'gatsby-plugin-algolia',
    //   options: {
    //     appId: process.env.GATSBY_ALGOLIA_APP_ID,
    //     apiKey: process.env.ALGOLIA_ADMIN_KEY,
    //     chunkSize: 10000,
    //     queries: require('@elegantstack/gatsby-blog-algolia/src/queries')
    //   }
    // },
    // {
    //   resolve: 'gatsby-plugin-mailchimp',
    //   options: {
    //     endpoint: process.env.MAILCHIMP_END_POINT
    //   }
    // },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Coniagas Battery Metals',
        short_name: 'Coniagas Battery Metals',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'content/assets/favicon.png'
      }
    }
  ],
  siteMetadata: {
    siteUrl: 'https://coniagas.netlify.app',
    title: 'Coniagas Battery Metals',
    name: 'Coniagas Battery Metals',
    description: 'Coniagas Battery Metals',
    address: 'Vancouver, Canada',
    email: 'email@example.com',
    phone: '+1 (888) 888-8888',

    //Site Social Media Links
    social: [
      {
        name: 'Facebook',
        url: 'https://github.com/gatsbyjs'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/gatsbyjs'
      },
      {
        name: 'LinkedIn',
        url: 'https://github.com/gatsbyjs'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Home',
        slug: '/'
      },
      {
        name: 'About',
        slug: '/authors'
      },
      {
        name: 'Technology',
        slug: '/contact'
      }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Quick Links',
        items: [
          {
            name: 'Advertise with us',
            slug: '/contact'
          },
          {
            name: 'About Us',
            slug: '/about'
          },
          {
            name: 'Contact Us',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'Legal Stuff',
        items: [
          {
            name: 'Privacy Notice',
            slug: '/'
          },
          {
            name: 'Cookie Policy',
            slug: '/'
          },
          {
            name: 'Terms Of Use',
            slug: '/'
          }
        ]
      }
    ]
  }
}

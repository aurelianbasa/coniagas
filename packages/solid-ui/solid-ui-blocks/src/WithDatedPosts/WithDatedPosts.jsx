import React, { Children } from 'react'
import { useDatedPosts } from '@helpers-blog'
import getImageVariant from '@components/utils/getImageVariant'
import { LanguageContext } from '../../../solid-ui-layout/src/Layout/LanguageContext';

const WithDatedPosts = ({ children, limit = 6 }) => {
  const _datedPosts = useDatedPosts()
  
  const language = React.useContext(LanguageContext);

  const pathParts = location.pathname.split('/')
  console.log(pathParts)
  const year = pathParts[pathParts.length - 2]
  console.log(year)

  const datedPosts = _datedPosts.filter(post => {
    return (post.language === language && post.category.name === year)
  })

  if (!datedPosts || datedPosts.length === 0) return null

  const collection = datedPosts.map(post => ({
    container: {
      variant: 'cards.interactive',
      link: {
        type: 'PAGE',
        link: post.slug
      }
    },
    text: [
      {
        text: post.category.name,
        color: 'alphaDark'
      },
      {
        text: post.title,
        variant: 'h5'
      },
      {
        text: post.excerpt
      },
      {
        text: post.author?.name,
        color: 'omegaDark'
      },
      {
        text: post.date
      },
      {
        text: `${post.timeToRead} min read`
      }
    ],
    images: [
      {
        alt: post.title,
        src: {
          childImageSharp: {
            gatsbyImageData: getImageVariant(post.thumbnail, 'vertical')
          }
        }
      }
    ],
    avatar: post.author
      ? {
          src: {
            childImageSharp: {
              gatsbyImageData: getImageVariant(post.author.thumbnail, 'small')
            }
          }
        }
      : null
  }))

  const wrappedBlock = Children.map(children, child =>
    React.cloneElement(child, {
      ...child.props,
      content: {
        text: child.props?.text || null,
        buttons: child.props?.buttons || null,
        collection: collection.splice(0, limit)
      }
    })
  )

  return wrappedBlock
}

export default WithDatedPosts

WithDatedPosts.defaultProps = {
  limit: 6
}

const { documentToPlainTextString } = require('@contentful/rich-text-plain-text-renderer');

const ALL_POSTS_QUERY = `
{
  allContentfulPost {
    edges {
      node {
        id
        internal {
          contentDigest
        }
        title
        slug
        year {
          name
        }
        content {
          raw
        }
      }
    }
  }
}
`;

function parseRichText(raw) {
  if (!raw) return '';

  try {
    const parsed = JSON.parse(raw);
    return documentToPlainTextString(parsed).slice(0, 5000);
  } catch {
    return '';
  }
}

const settings = {
  attributesToSnippet: ['content:20'],
  attributeForDistinct: 'year',
};

const queries = [
  {
    indexName: `Posts`,
    query: ALL_POSTS_QUERY,
    settings,
    transformer: ({ data }) =>
      data.allContentfulPost.edges.map(({ node }) => ({
        objectID: node.id,
        internal: {
          contentDigest: node.internal.contentDigest,
        },
        title: node.title,
        slug: node.slug,
        year: node.year?.name || '',
        content: parseRichText(node.content?.raw),
      })),
  },
];

module.exports = queries;

import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const options = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node, children) => <h2 className='text-5xl'>{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3 className='text-4xl'>{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4 className='text-3xl'>{children}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5 className='text-2xl'>{children}</h5>,
    [BLOCKS.PARAGRAPH]: (node, children) => <p className='text-base'>{children}</p>,

    [BLOCKS.TABLE]: (node, children) => (
      <div className='overflow-x-auto'>
        <table className='min-w-[600px]'>{children}</table>
      </div>
    ),

    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { gatsbyImageData } = node.data.target;

      return <GatsbyImage class='rounded-lg' image={getImage(gatsbyImageData)} alt='Post image' />;
    },

    [INLINES.HYPERLINK]: (node, children) => (
      <a href={node.data.uri} target='_blank' rel='noreferrer'>
        {children}
      </a>
    ),
  },
};

export default function RichText({ content }) {
  return <div className='rich-text grid gap-8'>{content && renderRichText(content, options)}</div>;
}

import React from 'react'
import { Box, Link } from 'theme-ui'
import defaultContent from '@solid-ui-blocks/utils/default.content'

const WithDefaultContent =
  Block =>
  ({ content = {}, ...props }) => {
    const title = `Block: ${Block.name} | Page: ${content.page} | Identifier: ${content.identifier}`
    return (
      <>
        {/* Offset for anchor links */}
        <Link
          id={content.identifier}
          sx={{
            display: `block`,
            visibility: `hidden`,
            position: `relative`,
            top: `-150px`
          }}
        ></Link>
        <Box title={title}>
          <Block content={{ ...defaultContent, ...content }} {...props} />
        </Box>
      </>
    )
  }

export default WithDefaultContent

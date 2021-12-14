import React from 'react'
import { Container, Flex, Box, Card } from 'theme-ui'
import Divider from '@solid-ui-components/Divider'
import ContentText from '@solid-ui-components/ContentText'
import ContentForm from '@solid-ui-components/ContentForm'
import ListItem from '@solid-ui-components/ListItem'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const FormBlock01 = ({ content, reverse }) => {
  const { identifier, text } = content

  return (
    <Container>
      <Flex
        sx={{
          alignItems: `stretch`,
          flexDirection: [
            reverse ? `column-reverse` : `column`,
            reverse ? `row-reverse` : `row`
          ]
        }}
      >
        {Array.isArray(content.collection) && (
          <Box>
            <ContentText content={text} space={3} />
            <Flex sx={{ flexDirection: [`column`, `row`] }}>
              {content.collection
                ?.filter(Boolean)
                ?.map(({ text, collection, form }, index) => (
                  <Card
                    variant='paper'
                    key={`item-${index}`}
                    sx={{
                      flexBasis: [`full`, `2/3`],
                      '& + &': {
                        ml: [0, 5],
                        mt: [4, 0],
                        flexBasis: [`full`, `1/3`]
                      }
                    }}
                  >
                    {text && (
                      <>
                        <Box sx={{ textAlign: `center` }}>
                          <ContentText content={text?.slice(1)} />
                        </Box>
                        <Divider space={3} />
                      </>
                    )}
                    {collection?.map((props, index) => (
                      <ListItem key={`item-${index}`} {...props} compact />
                    ))}
                    {form && (
                      <ContentForm
                        form={form}
                        id={`form.${identifier}.${
                          form.multiStep ? 'multi' : index
                        }`}
                      />
                    )}
                  </Card>
                ))}
            </Flex>
          </Box>
        )}
      </Flex>
    </Container>
  )
}

export default WithDefaultContent(FormBlock01)

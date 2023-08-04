import React, { useContext } from 'react'
import { Container, Grid, Flex } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentImages from '@solid-ui-components/ContentImages'
import ContentButtons from '@solid-ui-components/ContentButtons'
import ContentText from '@solid-ui-components/ContentText'
import Modal, { ModalContext } from '@solid-ui-components/Modal'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import { FaSearch } from 'react-icons/fa'

const styles = {
  item: {
    cursor: `pointer`,
    position: `relative`,
    ':hover': {
      '.gallery-overlay': {
        opacity: 1
      }
    }
  },
  overlay: {
    borderRadius: `default`,
    alignItems: `center`,
    justifyContent: `center`,
    size: `full`,
    bg: `rgba(50,50,50,0.4)`,
    transition: `opacity 100ms ease-in`,
    opacity: 0,
    position: `absolute`,
    zIndex: 2,
    top: 0,
    left: 0
  },
  modal: {
    width: `fit-content`,
    textAlign: `center`,
    p: 3
  }
}

const PhotoGalleryBlock01 = ({
  content: { identifier, text, collection, buttons }
}) => {
  const { setActiveModal } = useContext(ModalContext)

  return (
    <Container sx={{ textAlign: `center` }}>
      <ContentText content={text} />
      <Divider />
      <Grid columns={[1, 2, 3]}>
        {collection?.map(({ images, text }, i) => {
          const modalIdentifier = `${identifier}${i}-image`
          return (
            <React.Fragment key={`item-${i}`}>
              <Reveal
                effect='fadeIn'
                onClick={() => setActiveModal(modalIdentifier)}
                css={styles.item}
              >
                <Flex sx={styles.overlay} className='gallery-overlay'>
                  <FaSearch size='2.4em' color='white' />
                </Flex>
                <ContentImages content={{ images: [images[0]] }} />
              </Reveal>
              <Modal
                id={modalIdentifier}
                contentLabel='Image'
                contentStyles={styles.modal}
              >
                <ContentImages
                  content={{ images: [images[1]] }}
                  imageEffect='fadeIn'
                  sx={{ maxWidth: `80%`, maxHeight: `80%`, mx: `auto` }}
                />
                {text && (
                  <>
                    <Divider space={2} />
                    <ContentText content={text} />
                  </>
                )}
              </Modal>
            </React.Fragment>
          )
        })}
      </Grid>
      {buttons && (
        <>
          <Divider space={3} />
          <ContentButtons content={buttons} />
        </>
      )}
    </Container>
  )
}

export default WithDefaultContent(PhotoGalleryBlock01)

import React, { useEffect } from 'react'
import { Container, Box } from 'theme-ui'
import Divider from '@solid-ui-components/Divider'
import ContentButtons from '@solid-ui-components/ContentButtons'
import ContentText from '@solid-ui-components/ContentText'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const CONTAINER_ID = 'tradingview-chart-mini-widget'

const StockChartBlock01 = ({ content: { text, buttons } }) => {
  const containerId = `${CONTAINER_ID}-${Math.random()}`

  const chartProps = {
    symbol: '',
    width: '100%',
    height: '400',
    locale: 'en',
    dateRange: '12M',
    colorTheme: 'light',
    trendLineColor: 'rgba(41, 98, 255, 1)',
    underLineColor: 'rgba(41, 98, 255, 0.3)',
    underLineBottomColor: 'rgba(41, 98, 255, 0)',
    isTransparent: false,
    autosize: false,
    largeChartUrl: ''
  }

  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
    script.async = false
    script.innerHTML = JSON.stringify(chartProps)
    document.getElementById(containerId).appendChild(script)
    return () => {
      const container = document.getElementById(containerId)
      if (container) container.innerHTML = ''
    }
  }, [])

  return (
    <Container>
      <Box sx={{ textAlign: `center` }}>
        <ContentText content={text} />
      </Box>
      <Divider />
      <Box sx={{ height: `400px`, bg: `white` }}>
        <div id={containerId}></div>
      </Box>
      {buttons && (
        <>
          <Divider space={3} />
          <ContentButtons content={buttons} />
        </>
      )}
    </Container>
  )
}

export default WithDefaultContent(StockChartBlock01)

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import './CustomText.css'

const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

const marqueeVariants = {
  animate: {
    y: [200, -200],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "circInOut"
      }
    }
  }
};

const Marquee = (props) => {
  const [scrollIndex, setScrollIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex((scrollIndex) => {
        if (scrollIndex < props.children.length - 1) {
          return scrollIndex + 1
        } else {
          return 0
        }
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="marquee">
      <motion.span
        className="track"
        variants={marqueeVariants}
        animate="animate"
      >
        {props.children[scrollIndex]}
      </motion.span>
    </span>
  );
};

function Text(props) {
  return React.createElement(props.type, props, props.content);
}

const CustomText = ({ as: CustomComponent, content, ...props }) => {
  if (!content || content.length < 1) return null

  const { variant, color, align, space } = props

  let textComponent;
  textComponent = content.map((item, index) => {
    if (item.wordScroll) {
      const wordList = item.wordScroll.map((word, scrollIndex) => {
        let style = {
          textDecoration: word.underlineColor ? 'underline' : '', 
          textDecorationColor: word.underlineColor ?? '', 
          backgroundColor: word.highlightColor ?? '',
          display: 'inline',
          color: item.color || 'inherit'
        }
        return <Text
          type={item.variant || 'span'}
          as='default'
          key={index + '-' + scrollIndex}
          content={word.text}
          style={style}
        />
      })
      return <Marquee key={index}>{wordList}</Marquee>
    } else {
      let style = {
        textDecoration: item.underlineColor ? 'underline' : '', 
        textDecorationColor: item.underlineColor ?? '', 
        backgroundColor: item.highlightColor ?? '',
        display: 'inline',
        color: item.color || 'inherit'
      }
      let t = item.text
      return <Text
        type={item.variant || 'span'}
        as='default'
        key={index}
        content={t}
        style={style}
      />
    }
  })

  const isHeading = headings.includes(variant)

  return isHeading ? <Text
    type={variant || 'p'}
    content={textComponent}
    style={{
      textAlign: align || undefined,
      color: color
    }} /> : textComponent;
}

export default CustomText
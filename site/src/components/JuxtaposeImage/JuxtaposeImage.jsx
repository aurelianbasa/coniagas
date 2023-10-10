import React from 'react'
import './juxtapose.css'
import { motion } from 'framer-motion'
import { Container } from 'theme-ui'

const JuxtaposeImage = ({ as: CustomComponent, content, ...props }) => {
    const { srcImg1, srcImg2, labelImg1, labelImg2 } = content.juxtapose
    const width = '1025px'
    const height = '1445px'

    const [percentLeftSide, setPercentLeftSide] = React.useState(50)

    const onDrag = (event, info) => {
        if (info.point.x < 0) return
        if (info.point.x > width) return
        let percent = (info.point.x % width) / width * 100

        setPercentLeftSide(percent)
    }

    return (
        <div style={{ width: width + 'px', height: height }} class="juxtapose"  >
            <div class="jx-slider">
                <motion.div drag='x' onDrag={onDrag} dragMomentum={false} class="jx-handle" style={{ left: percentLeftSide + '%' }}>
                    <div class="jx-arrow jx-left"></div>
                    <div class="jx-control">
                        <div class="jx-controller" tabindex="0" role="slider" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
                    </div>
                    <div class="jx-arrow jx-right"></div>
                </motion.div>
                <div class="jx-image jx-left" style={{ width: percentLeftSide + '%' }}>
                    <img src={srcImg1} alt="" />
                    <div class="jx-label" tabindex="0">{labelImg1}</div>
                </div>
                <div class="jx-image jx-right" style={{ width: (100 - percentLeftSide) + '%' }}>
                    <img src={srcImg2} alt="" />
                    <div class="jx-label" tabindex="0">{labelImg2}</div>
                </div>
            </div>
        </div>
    )
}

export default JuxtaposeImage
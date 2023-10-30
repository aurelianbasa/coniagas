import React from 'react'
import './juxtapose.css'
import { motion } from 'framer-motion'
import { Container } from 'theme-ui'

function getWindowDimensions() {
    if (typeof window === "undefined") {
        return null;
    }

    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

const JuxtaposeImage = ({ as: CustomComponent, content, ...props }) => {
    const { srcImg1, srcImg2, labelImg1, labelImg2, height } = content.juxtapose;

    const [percentLeftSide, setPercentLeftSide] = React.useState(50);
    const [imgDimensions, setImgDimensions] = React.useState({ "width": 1, "heigth": 1 });
    const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());
    const [sliderOffset, setSliderOffset] = React.useState(null);

    React.useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const calcImgRatio = ({ target: img }) => {
        let ratio = img.naturalWidth / img.naturalHeight;
        let dimensions = {
            "width": height * ratio,
            "height": height
        }

        if (windowDimensions && windowDimensions.width < dimensions.width) {
            dimensions.width = windowDimensions.width * 0.95;
            dimensions.height = dimensions.width / ratio;
        }

        setImgDimensions(dimensions);
    }

    const onDrag = (event, info) => {
        let x = info.point.x;

        if(sliderOffset) {
            x = x + sliderOffset;
        }

        if (x < 0) return
        if (x > imgDimensions.width) return

        let percent = (x % imgDimensions.width) / imgDimensions.width * 100;
        setPercentLeftSide(percent)
    }

    const onDragStart = (event, info) => {
        if(!sliderOffset) {
            let x = info.point.x;
            let offset = (imgDimensions.width / 2) - x;
            setSliderOffset(offset);
        }
    }

    let style = {
        width: imgDimensions.width + 'px',
        height: imgDimensions.height + 'px'
    }

    return (
        <div style={style} class="juxtapose"  >
            <div class="jx-slider">
                <motion.div drag='x' onDragStart={onDragStart} onDrag={onDrag} dragMomentum={false} class="jx-handle" style={{ left: percentLeftSide + '%' }}>
                    <div class="jx-arrow jx-left"></div>
                    <div class="jx-control">
                        <div class="jx-controller" tabindex="0" role="slider" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
                    </div>
                    <div class="jx-arrow jx-right"></div>
                </motion.div>
                <div class="jx-image jx-left" style={{ width: percentLeftSide + '%' }}>
                    <img onLoad={calcImgRatio} src={srcImg1} alt="" />
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
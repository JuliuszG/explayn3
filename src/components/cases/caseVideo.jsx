import React, { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import Play from '../../images/play.svg'

const Style = styled.div`
    padding: 0 10%;
    @media (max-width: 960px) {
        padding: 10% 0;
    }
`
const VideoWrapper = styled.div`
    height: calc(100vh - 100px);
    width: 100%;
    position: relative;
    overflow: hidden;
    .overlay {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: url(${ ({ bg }) => bg });
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0px solid black;
        img {
            cursor: pointer;
        }
    }
    iframe {
        z-index: 40;
        width: 100%;
        height: 100%;
    }
`
const CaseVideo = ({ link }) => {
    const [overlayOn, setOverlayOn] = useState(true)
    return (
         <Style>
           <VideoWrapper bg={ `https://img.youtube.com/vi/${ link }/0.jpg` }>
               <AnimatePresence initial={false}>
                    {overlayOn && (
                    <motion.div 
                        className="overlay"
                        key={`overlay1${Math.random() * 100000}`}
                        animate={{x: 0}}
                        initial={{x: 0}}
                        exit={{opacity:0, transition: {duration:0.5}}}
                        onClick={() => setOverlayOn(false)}
                    >
                        <motion.img whileHover={{scale: 1.3, transition: { duration: 0.5 }}} src={ Play } alt="play button"/>
                    </motion.div>            
                    )} 
                    <iframe width="560" height="315" src={ `https://www.youtube-nocookie.com/embed/${ link }?autoplay=${overlayOn ? 0 : 1}&rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1` } title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>               
               </AnimatePresence>
           </VideoWrapper>
         </Style>
    )
}

export default CaseVideo
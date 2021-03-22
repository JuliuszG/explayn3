import React, { useState } from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube';
import BackgroundImage from 'gatsby-background-image'

const Style = styled.div`
    padding: 0 10%;
`
const VideoWrapper = styled(BackgroundImage)`
        position: relative;
        padding-bottom: 56.25%;
        height: 500px;
        width: 100%;
        border: 1px solid black;
        &.open iframe {
            opacity: 1;
        }
        iframe {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: all 0.5s ease-in-out;
    }
`
const CaseVideo = ({ link }) => {
    const [coverOn, setCoverOn] = useState(true)
    const handlePlay = () => setCoverOn(prevState => !prevState)
    return (
         <Style>
             {/* <button onClick={ handlePlay }>Play</button>
               <VideoWrapper
               Tag="div"
               className={!coverOn && "open"}
               fluid={false}
               backgroundColor={`#040e18`}
               >
               <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/RqzGzwTY-6w" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen></iframe>
               </VideoWrapper> */}
         </Style>
    )
}

export default CaseVideo
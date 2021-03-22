import React from 'react'
import styled from 'styled-components'

const Style = styled.div`
    padding: 0 10%;
`
const VideoWrapper = styled.div`
    height: calc(100vh - 100px);
    width: 100%;
    iframe {
        width: 100%;
        height: 100%;
    }
`
const CaseVideo = ({ link }) => {
    return (
         <Style>
           <VideoWrapper>
           <iframe src={ link } frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
           </VideoWrapper>
         </Style>
    )
}

export default CaseVideo
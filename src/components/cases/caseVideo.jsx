import React from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube';

const Style = styled.div`
    padding: 10%;
    .videoWrapper {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 */
        height: 0;
    }
    .videoWrapper iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`
const CaseVideo = ({ link }) => {
    return (
         <Style>
             <YouTube
                videoId={ 'RqzGzwTY-6w' }
                containerClassName="videoWrapper"
                opts={{
                    playerVars: { 
                        controls: 0,
                    } 
                }}
             />
         </Style>
    )
}

export default CaseVideo
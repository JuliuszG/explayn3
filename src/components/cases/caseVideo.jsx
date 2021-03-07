import React from 'react'
import styled from 'styled-components'

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
             <div className="videoWrapper">
             <iframe
                width="560" 
                height="315" 
                src={ link } 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
             </div>
         </Style>
    )
}

export default CaseVideo
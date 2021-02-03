import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Style = styled.div`
    display: flex;
    margin: 5% 0;
    @media (max-width: 950px) {
        flex-direction: column;
    }
    .img-wrapper {
        width: 50%;
        height: 80vh;
        @media (max-width: 950px) {
            width: 100%;
        }
    }
`

const CaseDoubleImage = ({ arr }) => {
    return (
        <Style>
            <div className="img-wrapper">
                <Img style={ { height: '100%', objectFit: "contain" } } fluid={ arr[0].fluid } alt="screen" />
            </div>
            <div className="img-wrapper">
                <Img style={ { height: '100%', objectFit: "contain" } } fluid={ arr[1].fluid } alt="screen" />
            </div>
        </Style>
    )
}

export default CaseDoubleImage
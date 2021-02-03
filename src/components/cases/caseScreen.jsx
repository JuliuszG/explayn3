import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Style = styled.div`
    padding: 0 15% 5%;
    width: 100%;
    @media (max-width: 450px) {
        padding: 0 5%;
    }
`
const Image = styled(Img)`
    width: 100%;
    height: 100%
`

const CaseScreen = ({ src }) => <Style><Image fluid={ src } alt="project screen" /></Style>

export default CaseScreen
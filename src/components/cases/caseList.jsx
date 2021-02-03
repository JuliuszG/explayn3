import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { colors } from '../../styles/colors'

const Style = styled.section`
    padding: 15%;
    font-family: 'Poppins';
    font-style: normal;
    color: ${ colors.neutral100 };
    @media (max-width: 1400px) {
        font-size: 14px;
    }
    @media (max-width: 650px) {
        font-size: 12px;
    }
    h2 {
        font-weight: 600;
        font-size: 3.3125em;
        line-height: 143.39%;
        margin-bottom: 8%;
        @media (max-width: 650px) {
            font-size: 2em;
        }
    }
    .content-wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        @media (max-width: 950px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        p {
            width: 40%;
            font-weight: 600;
            font-size: 1.5625em;
            line-height: 156%;
            @media (max-width: 950px) {
                margin-bottom: 10%;
                width: 100%;
            }
            @media (max-width: 650px) {
            font-size: 1.3em;
            }
        }
        ul {
            width: 40%;
            @media (max-width: 950px) {
                width: 100%;
            }
            li {
                display: flex;
                margin-bottom: 4%;
                @media (max-width: 1400px) {
                    margin-bottom: 6%;
                }
                @media (max-width: 950px) {
                    margin-bottom: 4%;
                }
                &:last-of-type {
                    margin-bottom: 0;
                }
                p {
                    width: 100%;
                    font-weight: 300;
                    font-size: 1.1875em;
                    line-height: 168.42%;
                }
                span {
                    margin-right: 4%;
                    margin-top: 1.5%;
                    display: block;
                    width: 1.5em;
                    height: 1.5em;
                }
            }
        }
    }
`

const CaseList = ({ title, paragraph, arrObj }) => {
    const data = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "casesTemp/checkmark.png" }) {
        childImageSharp {
            fluid {
            ...GatsbyImageSharpFluid
            }
        }
        }
    }
`
)
    const list = [ ...arrObj.List ]
    return (
        <Style>
            <h2>{ title }</h2>
            <div className="content-wrapper">
                <p>
                    { paragraph }
                </p>
                <ul>
                    { list.map((item, index) => (
                        <li key={ index }>
                            <span>
                                <Img fluid={ data.file.childImageSharp.fluid } alt="checkmark" />
                            </span>
                            <p>
                                { item }
                            </p>
                        </li>
                    )) }
                </ul>
            </div>
        </Style>
    )
}

export default CaseList
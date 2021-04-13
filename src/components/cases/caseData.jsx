import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/colors'
import { useInView } from 'react-intersection-observer';
import { AnimatedHeader, AnimatedParagraph, AnimatedLink } from '../util/animations'

const Style = styled.section`
    display: flex;
    padding: 15%;
    font-family: 'Poppins';
    font-style: normal;
    color: ${ colors.neutral100 };
    @media (max-width: 1400px) {
        font-size: 14px;
    }
    @media (max-width: 1250px) {
        font-size: 10px;
    }
    @media (max-width: 968px) {
        font-size: 16px;
        flex-direction: column;
    }
    @media (max-width: 650px) {
        font-size: 12px;
    }
    @media (max-width: 450px) {
        font-size: 10px;
        padding: 10% 5%;
    }
    .left {
        width: 70%;
        margin-right: 15%;
        @media (max-width: 968px) {
        width: 100%;
        margin-right: 0;
        margin-bottom: 10%;
    }
        h2 {
            font-weight: 600;
            font-size: 3.3125em;
            line-height: 143.39%;
            margin-bottom: 8%;
        }
        p {
            padding-right: 10%;
            font-weight: 300;
            font-size: 1.1875em;
            line-height: 168.42%;
            margin-bottom: 8%;
        }
        a {
            text-decoration: none;
            font-weight: 600;
            font-size: 16px;
            line-height: 29px;
            color: ${ colors.neutral100 };
            border-bottom: 1.3px solid ${ colors.neutral100 };
            padding-bottom: 1%;
        }
    }
    .right {
        width: 440px;
        border: 1.3px solid ${ colors.neutral30 };
        padding: 3%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media (max-width: 968px) {
        width: 100%;
        padding-left: 5%;
    }
        li {
            span {
                display: block;
                font-weight: 600;
                font-size: 12px;
                line-height: 18px;
                letter-spacing: 0.2em;
                text-transform: uppercase;
                color: ${ colors.neutral60 }
            }
            font-weight: 600;
            font-size: 18px;
            line-height: 29px;
            border-bottom: 1px solid ${ colors.neutral30 };
            padding: 10% 0;
            &:last-of-type {
                border-bottom: none;
            }
        }
    }
`

const CaseData = ({ title, paragraph, link, country, client, field, services }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5
      });
    return (
        <Style>
            <div className="left" ref={ ref }>
                <AnimatedHeader inView={ inView }>
                    { title }
                </AnimatedHeader>
                <AnimatedParagraph inView={ inView }>
                   { paragraph }
                </AnimatedParagraph>
                {link && <AnimatedLink inView={ inView } url={ link }>Zobacz stronę online</AnimatedLink>}
            </div>
            <ul className="right">
                <li>
                    <span className="field-name">
                        Country
                    </span>
                    { country } 
                </li>
                <li>
                    <span className="field-name">
                        Client
                    </span>
                    { client }
                </li>
                <li>
                    <span className="field-name">
                        Industry
                    </span>
                    { field }
                </li>
                <li>
                    <span className="field-name">
                        Scope of work
                    </span>
                    { services }
                </li>
            </ul>
        </Style>
    )
}

export default CaseData
import React from 'react'
import styled from 'styled-components'
import Play from '../../images/landing/landing-play.svg'

const Style = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Poppins";
    overflow: hidden;
    .content {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 0%;
        border: 1px solid black;
        .play {
            position: absolute;
            left: -50px;
            top: -60%;
            z-index: -1;
            @media (max-width: 1866px) {
                left: -15px;
            }
            /* @media (max-width: 1582px) {
                font-size: 12px;
            } */
            img {
                width: 50em;
            }
        }
        /* @media (max-width: 1700px) {
            font-size: 14px;
        } */
        h1 {
            font-size: 5.9375em;
            line-height: 126%;
            font-weight: 600;
            width: 1200px;
        }
        p {
            color: #000;
            font-weight: 300;
            font-size: 1.375em;
            line-height: 136%;
            width: 40%;
            padding-left: 50px;
        }
        span.blue {
            color: #3F54D3;
        }
        span.white {
            color: #fff;
        }
    }
`

const Landing2 = () => {
    return (
        <Style>
            
            <div className="content">
            <div className="play">
                <img src={Play} alt="play" />
            </div>
                    <h1>
                        <span className="white">New</span> ways to <span className="blue">develop </span>
                        <span className="white">your</span> <span className="blue">brand.</span>
                    </h1>
                    <p>
                        A full service web design and digital marketing agency powered by growth solutions.
                    </p>
            </div>
        </Style>
    )
}

export default Landing2
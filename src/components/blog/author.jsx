import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
const Style = styled.div`
display: flex;
justify-content: space-between;
font-family: "Poppins";
@media (max-width: 550px) {
    flex-direction: column;
    justify-content: center;
}
    .image-wrapper {
        width: 151px;
        height: 151px;
        margin-right: 53px;
        @media (max-width: 550px) {
            margin-right: 0;
            margin-bottom: 10px;
        }
    }
    .info {
        width: calc(100% - 200px);
        @media (max-width: 550px) {
            width: 100%;
        }
        small {
            font-weight: 600px;
            font-size: 12px;
            line-height: 18px;
            letter-spacing: 1.36px;
            color: #868686;
        }
        h3 {
            font-size: 30px;
            line-height: 50px;
            color: #000;
        }
        .about {
            font-size: 18px;
            line-height: 29px;
            letter-spacing: 0.05px;
            color: #000;
            width: 100%;
            @media (max-width: 550px) {
            width: 100%;
            }
        }
    }
`
const Pic = styled(Image)`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`
const Author = ({ name, about, photo }) => {
    return (
        <Style>
            <div className="image-wrapper">
                <Pic fluid={ photo } alt="author" />
            </div>
            <div className="info">
                <small>ABOUT THE AUTHOR</small>
                <h3>
                    { name }
                </h3>
                <p className="about">
                    { about }
                </p>
            </div>
        </Style>
    )
}

export default Author
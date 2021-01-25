import React from 'react'
import styled from 'styled-components'

const Burger = styled.div`
    width: ${ ({ customWidth }) => customWidth };
    height: ${ ({ customHeight }) => customHeight };
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    border: none;
    padding: 0;
    div {
        width: 100%;
        height: 2.3px;
        background: #282828;
        display: block;
        &:last-of-type {
            width: 50%;
        }
    }
`

const MenuIcon = ({ toggle, customWidth, customHeight }) => {
    return (
        <Burger customWidth={ customWidth } customHeight={ customHeight } onClick={ toggle }>
            <div></div>
            <div></div>
            <div></div>
        </Burger>
    )
}

export default MenuIcon
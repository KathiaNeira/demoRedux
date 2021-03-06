import styled, { css } from 'styled-components';

interface Button {
    availability: boolean
}

interface Card {
    adopted: boolean
}

export const WrapperContainer = styled.section`
    display: flex;
    max-width: 1800px;
    margin: auto;
`

export const WrapperContainerList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border: 1px solid gray;
    padding: 20px;
    width: 50%;
`
export const WrapperInfo = styled.div`
    height:50px;
    border: 1px solid gray;
`
export const WrapperName = styled.span`
    font-family: arial, sans-serif;
    background-color: #fff;
    color: #6e5180;
    text-align: left;
    font-weight: 500;
    font-size: 18px;
`

export const WrapperList = styled.div`
    position: relative;
    line-height: 25px;
    text-align: center;
    margin-bottom: 20px;
`

export const WrapperImage = styled.div`
    position: relative;
    width:250px;
    height: 250px;  
`

export const Image = styled.img`
    display: block;
    width:100%;
    height: 100%;
`

export const Button = styled.a`
    position: absolute;
    bottom: 0;
    left: 63px;
    background: #7e7c84b5;
    padding: 5px 26px;
    border-radius: 6px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    display: block;
    pointer-events: none;
    ${(props: Button) => props.availability && css`
        background: #ea4242;
        pointer-events: auto;
    `}
`

export const Container = styled.div`

`

export const WrapperBlocked = styled.div`
    display: none;
    ${(props: Card) => props.adopted && css`
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        background: #808080b3;
        cursor: no-drop;
        pointer-events: auto;
    `}
`

export const Adopted = styled.p`
    background: #2351b9;
    margin: 0;
    padding: 10px;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
`
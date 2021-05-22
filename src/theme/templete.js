import styled from 'styled-components'

const getNowDevice = window.innerWidth > 980 ? "laptop" : "mobile";

export const Cancel = styled.div`
    position            : fixed;
    width               : 100%;
    padding-top         : 1rem;
    padding-bottom      : 1rem;
    background-color    : transparent;
    height              : 4rem;
    cursor              : pointer;
    z-index             : ${({theme}) => theme.zIndex.highest};

    @media ${({theme}) => theme.mediaQueries.bellow1100} {
        background-color    : ${({theme}) =>theme.colors.black};
    }

    &::after,
    &::before{
        content             : "";
        width               : 40px;
        height              : 3px;
        display             : block;
        position            : absolute;
        top                 : 2rem;
        right               : 2rem;
        background-color    : ${({theme}) => theme.colors.white};
        transform           : rotate(45deg);
    }

    &::after{
        transform           : rotate(-45deg);
    }
`

export const IframeContainer = styled.div`
    display         : ${({device}) => (device == getNowDevice || device == undefined ? "block" : "none")};
    position        : relative;
    width           : 100%;
    height          : 0;
    top             : 0;
    padding-bottom  : 56.25%;
    margin-bottom   : 20px;

    iframe{
        position    : absolute;
        top         : 0;
        left        : 0;
        width       : 100%;
        height      : 100%;
    }
`
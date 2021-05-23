import styled from 'styled-components';

export const SubNavbarWrapper = styled.div`
    display         : block;
    width           : 80%;
    margin          : auto;
    position        : relative;
    margin-bottom   : 20px;
`

export const SubNavbarContainer = styled.ul`
    list-style              : none;
    border                  : solid 3px ${({theme}) => theme.colors.main};
    border-radius           : 23px;
    position                : relative;
    overflow                : hidden;
    background-color        : ${({theme}) => theme.colors.white};
    margin-bottom           : 1rem;
    padding                 : 10px 0;
    position                : absolute;
    width                   : 100%;
    border-top-right-radius : 0;
    border-top-left-radius  : 0;
    border-top              : none;
    z-index                 : ${({theme}) => theme.zIndex.medium};
    top                     : 46px;

    li{
        color           : ${({theme}) => theme.colors.main};
        font-size       : ${({theme}) => theme.fontSize.bellow980.h5}px;
        padding         : 10px 0;
        text-align      : center;
        font-weight     : 500;
        cursor          : pointer;
        margin          : 0 10px;
        

        &.select{
            color               : ${({theme}) => theme.colors.white};
            background-color    : #81A6DB;
            border-radius       : 15px;
        }
    }
`

export const SelectBlock = styled.div`
    border                      : solid 3px ${({theme}) => theme.colors.main};
    border-bottom               : ${({menuVisible , theme}) => menuVisible ? "none" : `solid 10px ${theme.colors.main}`};
    position                    : relative;
    background-color            : ${({theme}) => theme.colors.white};
    color                       : ${({theme}) => theme.colors.main};
    font-size                   : ${({theme}) => theme.fontSize.bellow980.h5}px;
    padding                     : 15px 0 10px;
    text-align                  : center;
    font-weight                 : 500;  
    border-radius               : ${({menuVisible}) => menuVisible ? 28 : 33}px;
    border-bottom-right-radius  : ${({menuVisible}) => menuVisible ? 0 : null};
    border-bottom-left-radius   : ${({menuVisible}) => menuVisible ? 0 : null};
    margin-bottom               : ${({menuVisible}) => menuVisible ? 10 : 0}px;

    &::before{
        content             : "";
        background-image    : ${`url('${process.env.PUBLIC_URL}/asset/back.png')`};
        width               : 16px;
        height              : 20px;
        display             : "block";
        position            : absolute;
        top                 : 12px;
        right               : 12px;
        background-position : center;
        background-size     : 100% 100%;
        transform           : rotate(90deg);

    }
    &::after{
        content             : "";
        width               : 90%;
        height              : 1px;
        display             : ${({menuVisible}) => menuVisible ? "block" : "none"};
        position            : absolute;
        bottom              : 0;
        right               : 5%;
        background-color    : ${({theme}) => theme.colors.main};
    }
`
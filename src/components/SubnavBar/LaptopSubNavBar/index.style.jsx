import styled from 'styled-components';

export const SubNavbarWrapper = styled.div`
    display     : inline-block;
    width       : ${({width}) => width ?? 100}%;
    margin      : auto;
`

export const SubNavbarContainer = styled.ul`
    list-style          : none;
    display             : flex;
    border              : solid .1rem ${({theme}) => theme.colors.main};
    border-radius       : 99px;
    position            : relative;
    overflow            : hidden;
    background-color    : ${({theme}) => theme.colors.white};
    margin-bottom       : 1rem;

    li{
        width           : ${({length}) => `${100 / length}%`};
        color           : ${({theme}) => theme.colors.main};
        font-size       : ${({theme}) => theme.fontSize.h4}px;
        padding         : .8rem 0;
        text-align      : center;
        font-weight     : 600;
        transition      : all 0.5s ease-in-out;
        position        : relative;
        cursor          : pointer;

        &.select{
            color       : ${({theme}) => theme.colors.white};
        }
    }
`

export const SelectBlock = styled.div`
    background-color    : ${({theme}) => theme.colors.main};
    border-radius       : 99px;
    width               : ${({length}) => `${100 / length}%`};
    height              : 100%;
    position            : absolute;
    transition          : all 1s;
    left                : ${({index , length}) => `${100 / length * index}%`};
`

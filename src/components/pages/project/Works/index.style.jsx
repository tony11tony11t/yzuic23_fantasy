import styled from 'styled-components';

export const ProjectItem = styled.div`
    display     : inline-block;
    width       : 25%;
    max-width   : 400px;
    margin-top  :-6px;
    cursor      : pointer;
    position    : relative;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        width   : 50%;
    }

    img{
        width   : 100%;
    }

    &:before{
        content             : '';
        width               : 100%;
        height              : 100%;
        display             : block;
        opacity             : 0;
        background-color    : #020202;
        position            : absolute;
        transition          : all 0.5s;
    }

    &:after{
        content             : '${({title}) => `${title}`}';
        width               : 100%;
        display             : block;
        position            : absolute;
        transition          : all 0.5s;
        color               : ${({theme}) => theme.colors.white};
        opacity             : 0;
        font-size           : ${({theme}) => theme.fontSize.h3}px;
        font-weight         : 600;
        letter-spacing      : 2px;
        bottom              : 30px;
        left                : 30px;
    }

    &:hover:before{
        opacity : 0.7;
    }
    &:hover:after{
        opacity : 1;
    }
`
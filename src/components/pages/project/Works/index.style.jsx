import styled from 'styled-components';

export const ProjectItem = styled.div`
    display     : inline-block;
    width       : 25%;
    max-width   : 400px;
    margin-top  :-6px;
    cursor      : pointer;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        width   : 50%;
    }

    img{
        width   : 100%;
    }
`
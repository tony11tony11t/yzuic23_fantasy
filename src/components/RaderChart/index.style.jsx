import styled from 'styled-components';

export const Path = styled.path`
    stroke       : ${({theme}) => theme.colors.main};
    fill         : transparent;
    stroke-width : 1.5;
`

export const DashLine = styled.path`
    stroke           : rgba(4, 78, 183 , 0.2);
    fill             : transparent;
    stroke-dasharray : 3;
`

export const Text = styled.text`
    fill        : ${({theme}) => theme.colors.main};
    font-size   : 16px;
` 

export const Score = styled.path`
    fill        : #ffe873bb;
    transition  : 1s;
` 
import styled from 'styled-components'

export const CategoryWrapper = styled.div`
    display         : flex;
    height          : 100%;
    padding         : 20px;
    flex-wrap       : wrap;
    justify-content : center;
    align-content   : center;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        align-content   : flex-start;
        margin-bottom   : 1rem;
        height          : auto;
    }
`
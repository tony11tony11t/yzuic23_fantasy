import styled from 'styled-components'

export const CategoryWrapper = styled.div`
    display         : flex;
    height          : 100%;
    padding         : 20px;
    flex-wrap       : wrap;
    flex-direction  : row;
    justify-content : center;
    align-content   : center;

    a{
        flex : 0 0 40%;
    }

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        align-content   : flex-start;
        margin-bottom   : 1rem;
        height          : auto;
    }
`
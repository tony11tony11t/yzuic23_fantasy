import styled  from 'styled-components';

export const ProjectContainer = styled.div`
    width               : 95%;
    max-width           : 1700px;
    margin              : auto;
    background-color    : ${({theme}) => theme.colors.white};
    padding             : 54px 50px;
    border-radius       : 50px;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        padding         : 30px 26px;
        border-radius   : 26px;
    }
`
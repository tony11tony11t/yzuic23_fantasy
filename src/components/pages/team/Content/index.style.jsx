import styled from 'styled-components'

export const TeamContainer = styled.div`
    max-width           : 1100px;
    margin              : auto;
    margin-top          : 80px;
    margin-bottom       : 40px;
    text-align          : center;
    position            : relative;
    padding             : 0 ${({theme}) => theme.page.padding}px;
    display             : flex;
    justify-content     : center;
    align-items         : center;
    height              : 80%;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        padding             : 0 ${({theme}) => theme.page.bellow980.padding}px;
        flex-direction      : column;
        margin-top          : 80px;
        justify-content     : flex-start;
    }
    

    img{
        width           : 1px;
        flex            : 0 0 475px;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            height  : auto;
            flex    : 1;
            width   : 100%;
        }
    }
`

export const TeamIntro = styled.div`
    color           : ${({theme}) => theme.colors.white};
    text-align      : left;
    flex            : 1;
    vertical-align  : top;
    position        : relative;
    margin-left     : 40px;
    height          : 593px;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        height          : auto;
        width           : 100%;
        margin-left     : 0;
    }

    h1{
        margin-bottom   : 40px;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            margin-top   : 20px;
        }
    }

    h3{
        &.content{
            margin-bottom   : 100px;

            @media ${({theme}) => theme.mediaQueries.bellow980} {
                margin-bottom   : 50px;
            }
        }

        &.member{
            position    : absolute;
            bottom      : 0;
            right       : 0;
            text-align  : right;
            white-space : pre-line;

            @media ${({theme}) => theme.mediaQueries.bellow980} {
                position        : relative;
                text-align      : center;
                margin-bottom   : 1rem;
            }
        }

        &.description{
            @media ${({theme}) => theme.mediaQueries.bellow980} {
                margin-bottom   : 2rem;
                text-align      : center;
                font-weight     : 500;
            }
        }
    }
`
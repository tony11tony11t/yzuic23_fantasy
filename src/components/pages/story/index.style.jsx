import styled from 'styled-components'

export const StoryContainer = styled.div`
    display         : flex;
    flex-direction  : row;
    flex            : 1;
    max-width       : 1200px;
    margin          : 20px auto 0;
    align-items     : center;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        flex-direction  : column;
    }

    h3{
        color         : ${({theme}) => theme.colors.main};
    }

    h4{
        font-weight : 500;
        line-height : ${({theme}) => theme.fontSize.h4 * 1.6}px;
        color       : ${({theme}) => theme.colors.black};
        margin      : 30px 0;
    }
    .content{
        flex        : 1;
    }
`

export const MonsterWrapper = styled.div`
    position    : relative;
    height      : 100%;

    .roleInfo{
        color   : ${({theme}) => theme.colors.main};
        height  : 100%;

        .intro{
            display: flex;

            @media ${({theme}) => theme.mediaQueries.bellow980} {
                flex-direction  : column;
            }

            .text{
                flex: 1;
                h1{
                    color           : ${({theme}) => theme.colors.main};
                    margin-bottom   : 50px;
                }

                h3{
                    color           : ${({theme}) => theme.colors.main};
                    font-weight     : 500;
                    white-space     : pre-line;
                    margin-bottom   : 40px;
                }
            }
        }

        

        td{
            vertical-align  : top;
            font-size       : ${({theme}) => theme.fontSize.h3}px;
            font-weight     : 600;
            padding-top     : 5px;
            line-height     : ${({theme}) => theme.fontSize.h3 * 1.4}px;
            letter-spacing  : 2px;

            &.field{
                width       : 80px;
            }

            @media ${({theme}) => theme.mediaQueries.bellow980} {
                font-size       : ${({theme}) => theme.fontSize.bellow980.h3}px;
                line-height     : ${({theme}) => theme.fontSize.bellow980.h3 * 1.4}px;

                &.field{
                    width       : 60px;
                }
            }

            
        }
    }
`

import styled from 'styled-components'

export const StoryContainer = styled.div`
    display         : flex;
    flex-direction  : row;
    flex            : 1;
    margin-top      : 20px;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        flex-direction  : column;
    }

    h1{
        color         : ${({theme}) => theme.colors.main};
        font-weight   : 500;
    }

    h4{
        color         : ${({theme}) => theme.colors.main};
    }

    p{
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
        

        p{
            color           : ${({theme}) => theme.colors.main};
            padding-right   : 50%;

            @media ${({theme}) => theme.mediaQueries.bellow980} {
                padding-right   : 0;
            }
        }

        td{
            vertical-align  : top;
            font-size       : ${({theme}) => theme.fontSize.p}px;
            padding         : 10px 10px 0 0;
            line-height     : ${({theme}) => theme.fontSize.p * 1.5}px;

            &.field{
                width       : 80px;
            }
 
            &:last-child{
                padding-right : 50%; 

                @media ${({theme}) => theme.mediaQueries.bellow980} {
                    padding-right   : 0;
                }   
            }
        }
        
    }

    .raderChartContainer{
        position    : absolute;
        top         : 0;
        right       : 0;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            position    : relative;
            text-align: center;
        }
    }
`

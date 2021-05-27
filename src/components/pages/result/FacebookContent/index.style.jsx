import styled from 'styled-components'

export const FacebookWrapper = styled.div`

    width       : 100%;
    max-width   : 1200px;
    margin      : auto;
    text-align  : center;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        width: 100%;
    }

    .endRow{
        display : flex;
        height  : 250px;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            height  : 30px;
        }

        .left{
            flex            : 1;
            border-right    : 5px solid ${({theme}) => theme.colors.main};
            padding-right   : 60px;
            margin-bottom   : 20px;

            @media ${({theme}) => theme.mediaQueries.bellow980} {
                flex            : 0;
                padding-right   : 0;
            }
        }

        .right{
            flex            : 1;
            border-left     : 5px solid ${({theme}) => theme.colors.main};
            padding-left    : 60px;
            margin-bottom   : 20px;
        }
    }
`

export const HistoryWrapper = styled.div`

    display : flex;
    height  : 400px;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        height  : 370px;
    }

    div{
        flex : 1;

        &.left{
            text-align      : right;
            border-right    : 5px solid ${({theme}) => theme.colors.main};
            padding-right   : 60px;

            @media ${({theme}) => theme.mediaQueries.bellow980} {
                flex            : 0;
                padding-right   : 0;
            }
        }

        &.right{
            text-align      : left;
            border-left     : 5px solid ${({theme}) => theme.colors.main};
            padding-left    : 60px;

            @media ${({theme}) => theme.mediaQueries.bellow980} {
                flex            : 1;
                padding-left    : 40px;
            }
        }
    }
`

export const HistoryContainerLeft = styled.div`
    border              : 6px solid ${({theme}) => theme.colors.main};
    border-radius       : 30px;
    background-color    : ${({theme}) => theme.colors.white};
    display             : flex;
    padding             : 30px;
    position            : relative;
    flex-direction      : column;
    width               : 480px;
    margin-left         : auto;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        padding         : 20px;
        width           : 100%;
    }

    &::before{
        content             : "";
        width               : 30px;
        height              : 30px;
        display             : block;
        position            : absolute;
        border-radius       : 999px;
        top                 : 10%;
        right               : calc( -60px + -3px + -22.5px + -5px); 
        background-color    : ${({theme}) => theme.colors.main};
        border              : 5px solid ${({theme}) => theme.colors.white};
        opacity             : 1;
    }

    &::after{
        content             : "";
        width               : 48px;
        height              : 10px;
        display             : block;
        position            : absolute;
        top                 : calc(10% + 20px - 5px);
        right               : -50px;
        background-color    : ${({theme}) => theme.colors.main};
        opacity             : 1;
    }

    h3 , h2{
        color           : ${({theme}) => theme.colors.main};
        margin          : 15px;
        word-break      : break-all;
        white-space     : pre-line;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            text-align : center;
        }

    }

    &>div{
        flex    : 1;
        

        &.ImgContainer{

            img{
                width   : 100%;
            }
        }
        
        @media ${({theme}) => theme.mediaQueries.bellow980} {
            &.ImgContainer{
                flex        : 0 0 150px;
                text-align  : right;
                align-self  : center;

                img{
                    width : 150px;
                }
            }
        }
    }
`

export const HistoryContainerRight = styled(HistoryContainerLeft)`

    margin-left         : 0;
    margin-right        : auto;

    &::before{
        top     : 10%;
        left    : calc( -60px + -3px + -22.5px + -5px);

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            left : calc( -40px + -3px + -22.5px + -5px);
        }
    }

    &::after{
        top     : calc(10% + 20px - 5px);
        left    : -50px;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            left    : -30px;
            width   : 28px;
        }
    }
`

import styled , {keyframes} from 'styled-components'

const RoleJump = keyframes`
    from{
        transform : translateY(0px)
    }
    to{
        transform : translateY(-30px);
    }
`

const BgRotate = keyframes`
    from{
        transform : rotate(0deg);
    }
    to{
        transform : rotate(360deg);
    }
`

export const RoleContainer = styled.div`
    flex            : 0 0 38%;
    position        : relative;
    text-align      : center;
    margin-right    : 20px;
    height          : 100%;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        flex            : 1;
        margin-right    : 0px;
    }

    .raderBtn{
        width           : 45px;
        height          : 45px;
        display         : ${({bg}) => bg && window.innerWidth < 980 ? "block" : "none"};
        position        : absolute;
        right           : 0;
        top             : -10px;
        z-index         : ${({theme}) => theme.zIndex.lower};
    }

    .roleImgContainer{
        opacity: ${({raderVisible}) => raderVisible ? 0 : 1};

        .bg{
            animation-name              : ${BgRotate};
            animation-duration          : 3s;
            animation-iteration-count   : infinite;
            animation-timing-function   : linear;
            position                    : absolute;
            width                       : 100%;
            top                         : 0;
            left                        : 0;

            @media ${({theme}) => theme.mediaQueries.bellow980} {
                width                   : 100%;
                min-width               : 100%;
            }
        }

        .role{
            animation-name              : ${({bg}) => bg ? RoleJump : null};
            animation-duration          : 0.5s;
            animation-iteration-count   : infinite;
            animation-direction         : alternate-reverse;
            width                       : 70%;
            margin                      : auto;

            @media ${({theme}) => theme.mediaQueries.bellow980} {
                width                   : 80%;
                min-width               : 80%;
                margin-bottom           : 20px;
            }
        }
    }
    .raderChartContainer{
        opacity     : ${({raderVisible}) => raderVisible ? 1 : 0};
        position    : absolute;
        top         : 0;
        text-align  : center;
        width       : 100%;
        top         : 30px;
    }

    
`
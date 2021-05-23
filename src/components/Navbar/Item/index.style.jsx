import styled from 'styled-components'

export const ItemContainer = styled.div`
    display     : block;
    flex        : 1;
    position    : relative;
    text-align  : center;

    a{
        img{
            width       : 70px;
            z-index     : ${({theme}) => theme.zIndex.lower};
            cursor      : pointer;
            position    : relative; 
        }

        &:hover+p{
            top     : 95%;
            opacity : 1;
        }
    }

    p{
        background-color    : ${({theme}) => theme.colors.white};
        color               : ${({theme}) => theme.colors.main};
        z-index             : ${({theme}) => theme.zIndex.lowest};
        letter-spacing      : 2px;
        border              : 2px solid ${({theme}) => theme.colors.main};
        padding             : .4rem 0;
        text-align          : center;
        position            : absolute;
        left                : 50%;
        top                 : 0;
        transform           : translateX(-50%);
        width               : 70px;
        white-space         : pre-line;
        transition          : all .5s;
        opacity             : 0;

        span{
            display         : block;
            font-size       : ${({theme}) => theme.fontSize.p * 0.5}px;
            letter-spacing  : 0;
            line-height     : ${({theme}) => theme.fontSize.p}px;
        }
    }
`
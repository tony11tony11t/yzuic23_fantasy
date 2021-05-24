import styled from 'styled-components'

export const ProductWrapper = styled.div`
    width       : 100%;
    margin      : auto;
    text-align  : center;
`

export const ProductContainer = styled.div`
    position        : relative;
    margin          : 40px 0 60px;
    width           : ${({length}) => length > 1 ? "100%" : "50%"};
    display         : inline-block;
    padding-left    : ${({length , index}) => length == 1 ? (index % 2 == 1 ? ".8rem" : 0) : 0};
    padding-right   : ${({length , index}) => length == 1 ? (index % 2 == 0 ? ".8rem" : 0) : 0};
    
    @media ${({theme}) => theme.mediaQueries.bellow980} {
        width           : 100%;
        padding-left    : 0;
        padding-right   : 0;
    }

    h4{
        background-color: ${({theme}) => theme.colors.main};
        padding         : 10px 20px;
        position        : absolute;
        top             : 0;
        transform       : translateY(-50%);
        border-radius   : 16px;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            padding         : 6px 16px;
            border-radius   : 12px;
        }
    }
`

export const ProductImgContainer = styled.div`
    width           : 100%;
    display         : flex;
    flex-wrap       : wrap;
    justify-content : space-between;
    align-content   : center;

    img{
        width       : 1px;
        flex        : 1;
        padding     : 0 16px;

        ${({length}) => length > 1 && `&:first-child{
            padding: 0 16px 0 0;
        }`}

        ${({length}) => length > 1 && `&:last-child{
            padding: 0 0 0 16px;
        }`}

        ${({length}) => length == 1 && `
            padding: 0;
        `}

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            flex        : 0 0 100%;
            padding     : 16px 0;
            align-self  : center;

            &:first-child,
            &:last-child{
                padding: 8px 0;
            }
        }
    }
`
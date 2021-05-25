import styled from 'styled-components';

export const ProjectContent = styled.div`
    max-width           : 980px;
    margin              : auto;
    margin-top          : 40px;
    margin-bottom       : 40px;
    padding             : 0 ${({theme}) => theme.page.padding}px;

    @media ${({theme}) => theme.mediaQueries.bellow1100} {
        margin-top      : 80px;
    }

    h1 , h3 , h4 , h5{   
        padding-bottom  : 16px;
    }

    p{
        margin-bottom   : 30px;
    }

    img{
        width           : 100%;
        margin-bottom   : 20px;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            margin-bottom   : 10px;
        }
    }
` 

export const ProjectIntro = styled.div`
    display             : ${({device}) => (device == (window.innerWidth > 980 ? "laptop" : "mobile") ? "flex" : "none")};
    align-content       : flex-start;
    margin              : 1rem 0 2rem;
    flex-direction      : ${({device}) => (device == "laptop" ? "row" : "column")};;

    .left{
        display         : flex;
        flex-direction  : column;
        flex            : 1;
    }

    .right{
        flex            : 2.5;
        margin-left     : 40px;
        position        : relative;
    }
`

export const ProjectTeacher = styled.div`
    display         : flex;
    flex-direction  : column;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        flex-direction  : row;
        justify-content : flex-end;
    }

    h5{
        border-bottom   : solid 1px ${({theme}) => theme.colors.white};
        text-align      : center;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            border-bottom  : none;
            border-right   : solid 1px ${({theme}) => theme.colors.white};
            padding         : 0 8px;
        }

        &:last-of-type{
            padding-top     : 16px;
            border-bottom   : none;

            @media ${({theme}) => theme.mediaQueries.bellow980} {
                border-right   : none;
                padding : 0 8px;
            }
        }
    }
`

export const ProjectMemberContainer = styled.div`
    display         : flex;
    flex-wrap       : wrap;
    margin-top      : 1rem;
    justify-content : center;
    padding         : 0px ${({length}) => length == 7 ? 60 : 0}px;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        margin-top      : 0;
        justify-content : flex-start;
    }
`
import styled from 'styled-components'

export const AppWrapper = styled.div`
    background-color    : transparent;
    height              : 100%;
    overflow            : hidden;
`

export const ContainerWrapper = styled.div`
    flex                : 5;
    overflow-x          : hidden;
    overflow-y          : auto;
    background-image    : url(${({bgUrl , mobileBgUrl})=>window.innerWidth > 980 ? bgUrl : mobileBgUrl});
    background-size     : 100% 100%;
    height              : calc(100% - ${({theme}) => theme.navBar.height}px);
    padding             : 0 ${({theme}) => theme.page.padding}px;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        height          : calc(100% - ${({theme}) => theme.navBar.bellow980.height}px);
        padding         : 0 ${({theme}) => theme.page.bellow980.padding}px;
    }
`

export const LoadingContainer = styled.div`
    position            : absolute;
    top                 : 0;
    left                : 0;
    width               : 100%;
    height              : 100%;
    z-index             : ${({theme , percent}) => percent >= 100 ? -1 : theme.zIndex.highest};
    background-color    : #FF506E;
    display             : flex;
    justify-content     : center;
    align-items         : center;
    flex-direction      : column;
    opacity             : ${({percent}) => percent >= 100 ? 0 : 1};
    transition          : all ${({percent}) => percent >= 100 ? 1 : 0}s;
    transition-delay    : ${({percent}) => percent >= 100 ? 1 : 0}s;

    img{
        width       : 150px;
        
    }
    .loadingBarBorder{
        margin-top          : 10px;
        width               : 200px;
        height              : 20px;
        border-radius       : 10px;
        border              : 3px solid ${({theme}) => theme.colors.main};
        background-color    : ${({theme}) => theme.colors.white};
        position            : relative;
        

        &::before{
            content             : "";
            display             : "block";
            position            : absolute;
            top                 : 0;
            left                : 0;
            width               : ${({percent}) => percent}%;
            height              : 14px;
            background-color    : #FFE200;
            border-radius       : 10px;
            transition          : all 0.5s;

        }
    }
`
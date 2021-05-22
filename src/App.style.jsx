import styled from 'styled-components'

export const AppWrapper = styled.div`
    background-color    : ${({theme}) => theme.colors.main};
    height              : 100%;
    overflow            : hidden;
`

export const ContainerWrapper = styled.div`
    flex                : 5;
    overflow            : auto;
    background-image    : url(${({bgUrl})=>bgUrl});
    background-size     : 100% 100%;
    height              : calc(100% - ${({theme}) => theme.navBar.height}px);
    padding             : 0 ${({theme}) => theme.page.padding}px;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        height          : calc(100% - ${({theme}) => theme.navBar.bellow980.height}px);
        padding         : 0 ${({theme}) => theme.page.bellow980.padding}px;
    }
`
import styled from 'styled-components'

export const MobileMeunBtn = styled.div`
    position    : absolute;
    right       : 1rem;
    display     : none;
    cursor      : pointer;

    &::before,
    &::after{
        content             : "";
        width               : 40px;
        height              : 3px;
        display             : block;
        background-color    : ${({theme}) => theme.colors.white};
    }

    &::before{
        margin-bottom   : .5rem;
    }

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        display             : block;
    }
`

export const NavbarWrapper = styled.div`
    z-index             : ${({theme}) => theme.zIndex.higher};
    background-color    : ${({theme}) => theme.colors.main};
    height              : ${({theme}) => theme.navBar.height}px;
    padding             : 0 ${({theme}) => theme.page.padding}px;
    display             : flex;
    flex-direction      : row;
    position            : relative;
    align-items         : center;

    &>a{
        width           : 16%;
        min-width       : 280px;
        margin-right    : 20px;
        cursor          : pointer;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            min-width   : 250px;
        }

        img{
            width       : 100%;
        }
    }

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        height          : ${({theme}) => theme.navBar.bellow980.height}px;
        padding         : 0 ${({theme}) => theme.page.bellow980.padding}px;
    }
`;

export const NavbarCotainer = styled.div`
    display             : flex;
    flex-direction      : row;
    flex                : ${({flex}) => flex ?? null};
    justify-content     : flex-end;
    width               : 548px;

    &>a{
        text-align      : center;
        width           : 50px;

        img{
            width       : 100%;
        }
    }

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        display         : none;
    }
`;
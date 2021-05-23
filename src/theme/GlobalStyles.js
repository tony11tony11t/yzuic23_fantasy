import {createGlobalStyle} from 'styled-components'
import TaipeiSansTCR from '../fonts/TaipeiSansTCBeta-Regular.woff'
import TaipeiSansTCL from '../fonts/TaipeiSansTCBeta-Light.woff'
import TaipeiSansTCB from '../fonts/TaipeiSansTCBeta-Bold.woff'

const GlobalStyle = createGlobalStyle`
    html , body , #root{
        height  : 100%;
    }

    *{
        font-family         : 'TaipeiSansTC', sans-serif;
        margin              : 0;
        padding             : 0;
        -webkit-box-sizing  : border-box;
        -moz-box-sizing     : border-box;
        box-sizing          : border-box;
        -ms-overflow-style  : none;  /* IE and Edge */
        scrollbar-width     : none;  /* Firefox */

        &::-webkit-scrollbar{
            display         : none;
        }
    }

    h1,h2,h3,h4,h5,p{
        color       : ${({theme}) => theme.colors.white};
    }

    h1{
        font-size   : ${({theme}) => theme.fontSize.h1}px;
        line-height : ${({theme}) => theme.fontSize.h1 * 1.4}px;
    }

    h2{
        font-size   : ${({theme}) => theme.fontSize.h2}px;
        line-height : ${({theme}) => theme.fontSize.h2 * 1.4}px;
    }

    h3{
        font-size   : ${({theme}) => theme.fontSize.h3}px;
        line-height : ${({theme}) => theme.fontSize.h3 * 1.4}px;
    }

    h4{
        font-size   : ${({theme}) => theme.fontSize.h4}px;
        line-height : ${({theme}) => theme.fontSize.h4 * 1.4}px;
    }

    h5{
        font-size   : ${({theme}) => theme.fontSize.h5}px;
        line-height : ${({theme}) => theme.fontSize.h5 * 1.4}px;
    }

    p{
        font-size       : ${({theme}) => theme.fontSize.p}px;
        line-height     : ${({theme}) => theme.fontSize.p * 1.4}px;
        letter-spacing  : 1px;
    }

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        h1{
            font-size   : ${({theme}) => theme.fontSize.bellow980.h1}px;
            line-height : ${({theme}) => theme.fontSize.bellow980.h1 * 1.4}px;
        }

        h2{
            font-size   : ${({theme}) => theme.fontSize.bellow980.h2}px;
            line-height : ${({theme}) => theme.fontSize.bellow980.h2 * 1.4}px;
        }

        h3{
            font-size   : ${({theme}) => theme.fontSize.bellow980.h3}px;
            line-height : ${({theme}) => theme.fontSize.bellow980.h3 * 1.4}px;
        }

        h4{
            font-size   : ${({theme}) => theme.fontSize.bellow980.h4}px;
            line-height : ${({theme}) => theme.fontSize.bellow980.h4 * 1.4}px;
        }

        h5{
            font-size   : ${({theme}) => theme.fontSize.bellow980.h5}px;
            line-height : ${({theme}) => theme.fontSize.bellow980.h5 * 1.4}px;
        }

        p{
            font-size   : ${({theme}) => theme.fontSize.bellow980.p}px;
            line-height : ${({theme}) => theme.fontSize.bellow980.p * 1.4}px;
        }
    }

    @font-face{
        font-family: 'TaipeiSansTC';
        src : url(${TaipeiSansTCL}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face{
        font-family: 'TaipeiSansTC';
        src : url(${TaipeiSansTCR}) format('woff');
        font-weight: 500;
        font-style: normal;
    }

    @font-face{
        font-family: 'TaipeiSansTC';
        src : url(${TaipeiSansTCB}) format('woff');
        font-weight: 600;
        font-style: normal;
    }
`

export default GlobalStyle;
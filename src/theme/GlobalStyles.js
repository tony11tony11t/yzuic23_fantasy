import {createGlobalStyle} from 'styled-components'
import TaipeiSansTCR from '../fonts/TaipeiSansTCBeta-Regular.woff'
import TaipeiSansTCL from '../fonts/TaipeiSansTCBeta-Light.woff'
import TaipeiSansTCB from '../fonts/TaipeiSansTCBeta-Bold.woff'

const GlobalStyle = createGlobalStyle`
    html , body , #root{
        height: 100%;
    }

    *{
        font-family: 'TaipeiSansTC', sans-serif;
        margin: 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -ms-overflow-style  : none;  /* IE and Edge */
        scrollbar-width     : none;  /* Firefox */

        &::-webkit-scrollbar{
            display         : none;
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
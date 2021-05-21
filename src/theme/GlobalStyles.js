import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html , body , #root{
    margin: 0;
    height: 100%;
    }
    *{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -ms-overflow-style  : none;  /* IE and Edge */
    scrollbar-width     : none;  /* Firefox */

    
    }
    *::-webkit-scrollbar{
    display         : none;
    }
`

export default GlobalStyle;
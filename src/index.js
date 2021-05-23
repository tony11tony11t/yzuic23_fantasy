import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './theme/GlobalStyles'
import {ThemeProvider} from 'styled-components'
import Theme from './theme/theme'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider theme = {Theme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </BrowserRouter>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './theme/GlobalStyles'
import {ThemeProvider} from 'styled-components'
import Theme from './theme/theme'
import {HashRouter} from 'react-router-dom'

ReactDOM.render(
    <HashRouter>
        <ThemeProvider theme = {Theme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </HashRouter>,
  document.getElementById('root')
);

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Gilroy ExtraBold';
        src: url(${require('../../styles/fonts/Gilroy-ExtraBold.otf')}) format('opentype');
    }

    @font-face {
        font-family: 'Gilroy Light';
        src: url(${require('../../styles/fonts/Gilroy-Light.otf')}) format('opentype');
    }

    @font-face {
        font-family: 'Gotham Rounded Book';
        src: url(${require('../../styles/fonts/GothamRoundedBook.woff')}) format("woff"),
             url(${require('../../styles/fonts/GothamRoundedBook.woff2')}) format("woff2");
    }

    @font-face {
        font-family: 'Proxima Nova Regular';
        src: url(${require('../../styles/fonts/Proxima-Nova-Regular.woff')}) format("woff"),
             url(${require('../../styles/fonts/Proxima-Nova-Regular.woff2')}) format("woff2");
    }

    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700|Source+Sans+Pro&display=swap');

    *, *:before, *:after {
        box-sizing: border-box;
    }

    body, h1, h2, h3, h4, h5, h6 {
        margin: 0;    
    }

    .modal-backdrop {
        position: relative !important;
    }
`

export default GlobalStyle;
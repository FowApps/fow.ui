import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
    ${normalize};

    * {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.4rem;
        font-family: 'Montserrat', sans-serif;
        line-height: unset;
        letter-spacing: unset !important;
    }

    a {
        text-decoration: none;
    }

    &::-webkit-scrollbar-track {
        border-radius: 1rem;
        background-color: #F5F5F5;
        box-shadow: inset 0 0 0.6rem rgba(0,0,0,0.05);
    }

    &::-webkit-scrollbar {
        width: 1rem;
        height: 1rem;
        background-color: #FFF;
    }
    
    &::-webkit-scrollbar-thumb {
        border-radius: 1rem;
        background-color: ${(props) => props.theme.fow.colors.grey.main};
    }

    .rc-menu-submenu-hidden {
        display: none;
    }
`;

export default GlobalStyle;

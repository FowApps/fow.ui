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
        color: unset !important;
        text-decoration: none;
        transition: none !important;
    }

    label {
        margin-bottom: 0;
    }

    &::-webkit-scrollbar-track {
        border-radius: 1rem;
        background-color: transparent;
    }

    &::-webkit-scrollbar {
        width: 0.4rem;
        height: 0.4rem;
        background-color: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
        border-radius: 1rem;
        background-color: ${(props) => props.theme.fow.colors.grey.light};
    }

    .rc-menu-submenu-hidden {
        display: none;
    }
`;

export default GlobalStyle;

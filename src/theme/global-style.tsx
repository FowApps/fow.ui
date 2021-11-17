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
        background-color: ${(props) => props.theme.fow.colors.greyDark.lighter};
    }

    .rc-menu-submenu-hidden {
        display: none;
    }

    .rc-pagination-item {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border:none;
        background-color: transparent !important;
        font-family: inherit;
        line-height: inherit;
    }

    .rc-pagination-disabled {
        color: ${(props) => props.theme.fow.colors.greyDark.lighter};
    }

    .rc-pagination-prev svg, .rc-pagination-next svg {
        font-size: 12px;
    }

    .rc-pagination-item-active {
        border-radius: 100px;
        background-color: ${(props) =>
            props.theme.fow.colors.greyDark.main} !important;

        span {
            color: ${(props) => props.theme.fow.colors.common.white};
            font-size: 12px;
            line-height: 20px;
        }
    }
`;

export default GlobalStyle;

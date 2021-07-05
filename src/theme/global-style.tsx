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
        font-size: 1.6rem;
        font-family: 'Montserrat', sans-serif;
    }

        a {
            text-decoration: none;
        }

    &::-webkit-scrollbar-track {
        background-color: #F5F5F5;
        border-radius: 1rem;
        box-shadow: inset 0 0 0.6rem rgba(0,0,0,0.05);
    }

    &::-webkit-scrollbar {
        width: 1rem;
        height: 1rem;
        background-color: #FFF;
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.fow.colors.grey.main};
        border-radius: 1rem;
    }
`;

export default GlobalStyle;

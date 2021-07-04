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
        box-shadow: inset 0 0 0.6rem rgba(0,0,0,0.05);
        background-color: #F5F5F5;
        border-radius: 1rem;
    }

    &::-webkit-scrollbar {
        width: 1rem;
        height: 1rem;
        background-color: #FFF;
    }
    
    &::-webkit-scrollbar-thumb {
        border-radius: 1rem;
        background-color: ${(props) => props.theme.colors.grey[500]};
    }
`;

export default GlobalStyle;

import { css } from 'styled-components';

type ColorTypes =
    | 'pink'
    | 'orange'
    | 'green'
    | 'blue'
    | 'purple'
    | 'darkPurple';

export const setColor = (color: ColorTypes) => {
    switch (color) {
        case 'pink':
            return css`
                background-color: ${(props) =>
                    props.theme.fow.colors.pink.main};
            `;
        case 'orange':
            return css`
                background-color: ${(props) =>
                    props.theme.fow.colors.orange.main};
            `;
        case 'green':
            return css`
                background-color: ${(props) =>
                    props.theme.fow.colors.green.main};
            `;
        case 'blue':
            return css`
                background-color: ${(props) =>
                    props.theme.fow.colors.blue.main};
            `;
        case 'purple':
            return css`
                background-color: ${(props) =>
                    props.theme.fow.colors.purple.main};
            `;
        case 'darkPurple':
            return css`
                background-color: ${(props) =>
                    props.theme.fow.colors.darkPurple.main};
            `;
        default:
            return ``;
    }
};

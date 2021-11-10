import { css } from 'styled-components';

type ColorTypes =
    | 'greyDark'
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'pink'
    | 'orange'
    | 'green'
    | 'greenDark'
    | 'blue'
    | 'purple'
    | 'darkPurple';

export const setColor = (color: ColorTypes) => {
    switch (color) {
        case 'greyDark':
            return css`
                background-color: ${(props) =>
                    props.theme.fow.colors.grey.transparent16};
                color: ${(props) => props.theme.fow.colors.greyDark.dark};
            `;
        case 'primary':
            return css`
                background-color: ${(props) =>
                    props.theme.fow.colors.primary.main};
            `;
        case 'info':
            return css`
                background-color: ${(props) =>
                    props.theme.fow.colors.info.main};
            `;
        case 'success':
            return css`
                background-color: ${(props) =>
                    props.theme.fow.colors.success.main};
                color: ${(props) => props.theme.fow.colors.greyDark.dark};
            `;
        case 'warning':
            return css`
                background-color: ${(props) =>
                    props.theme.fow.colors.warning.main};
                color: ${(props) => props.theme.fow.colors.greyDark.dark};
            `;
        case 'error':
            return css`
                background-color: ${(props) =>
                    props.theme.fow.colors.error.main};
            `;
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
        case 'greenDark':
            return css`
                background-color: ${(props) =>
                    props.theme.fow.colors.greenDark.main};
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

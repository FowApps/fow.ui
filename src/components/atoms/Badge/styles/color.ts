import { css } from 'styled-components';

type ColorTypes = 'primary' | 'info' | 'success' | 'warning' | 'error' | 'grey';

export const setColor = (color: ColorTypes) => {
    switch (color) {
        case 'primary':
            return css`
                background-color: ${(props) =>
                    props.theme.fow.colors.primary.dark};
            `;
        case 'info':
            return css`
                background-color: ${(props) =>
                    props.theme.fow.colors.info.dark};
            `;
        case 'success':
            return css`
                background-color: ${(props) =>
                    props.theme.fow.colors.info.dark};
            `;
        case 'warning':
            return css`
                background-color: ${(props) =>
                    props.theme.fow.colors.warning.dark};
            `;
        case 'error':
            return css`
                background-color: ${(props) =>
                    props.theme.fow.colors.error.dark};
            `;
        case 'grey':
            return css`
                background-color: ${(props) =>
                    props.theme.fow.colors.greyDark.main};
            `;
        default:
            return ``;
    }
};

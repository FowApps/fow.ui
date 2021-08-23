import { css } from 'styled-components';

type ColorTypes = 'grey' | 'primary' | 'info' | 'success' | 'warning' | 'error';

export const setColor = (color: ColorTypes) => {
    switch (color) {
        case 'grey':
            return css`
                background-color: ${(props) =>
                    props.theme.fow.colors.grey.transparent16};
                color: ${(props) => props.theme.fow.colors.grey.darker};
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
                color: ${(props) => props.theme.fow.colors.grey.darker};
            `;
        case 'warning':
            return css`
                background-color: ${(props) =>
                    props.theme.fow.colors.warning.main};
                color: ${(props) => props.theme.fow.colors.grey.darker};
            `;
        case 'error':
            return css`
                background-color: ${(props) =>
                    props.theme.fow.colors.error.main};
            `;
        default:
            return ``;
    }
};

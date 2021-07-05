import { css } from 'styled-components';

type TypeTypes = 'filled' | 'outlined';
type ColorTypes = 'grey' | 'primary' | 'info' | 'success' | 'warning' | 'error';

export const setColor = (type: TypeTypes, color: ColorTypes) => {
    switch (color) {
        case 'grey':
            if (type === 'filled') {
                return css`
                    background-color: ${(props) =>
                        props.theme.colors.grey.transparent16};
                    color: ${(props) => props.theme.colors.text.primary};
                `;
            }
            return css`
                background-color: transparent;
                border: 1px solid
                    ${(props) => props.theme.colors.grey.transparent32};
                color: ${(props) => props.theme.colors.text.primary};
            `;
        case 'primary':
            if (type === 'filled') {
                return css`
                    background-color: ${(props) =>
                        props.theme.colors.primary.main};
                    color: ${(props) => props.theme.colors.common.white};
                `;
            }
            return css`
                background-color: transparent;
                border: 1px solid ${(props) => props.theme.colors.primary.main};
                color: ${(props) => props.theme.colors.primary.main};
            `;
        case 'info':
            if (type === 'filled') {
                return css`
                    background-color: ${(props) =>
                        props.theme.colors.info.main};
                    color: ${(props) => props.theme.colors.common.white};
                `;
            }
            return css`
                background-color: transparent;
                border: 1px solid ${(props) => props.theme.colors.info.main};
                color: ${(props) => props.theme.colors.info.main};
            `;
        case 'success':
            if (type === 'filled') {
                return css`
                    background-color: ${(props) =>
                        props.theme.colors.success.main};
                    color: ${(props) => props.theme.colors.text.primary};
                `;
            }
            return css`
                background-color: transparent;
                border: 1px solid ${(props) => props.theme.colors.success.main};
                color: ${(props) => props.theme.colors.success.main};
            `;
        case 'warning':
            if (type === 'filled') {
                return css`
                    background-color: ${(props) =>
                        props.theme.colors.warning.main};
                    color: ${(props) => props.theme.colors.text.primary};
                `;
            }
            return css`
                background-color: transparent;
                border: 1px solid ${(props) => props.theme.colors.warning.main};
                color: ${(props) => props.theme.colors.warning.main};
            `;
        case 'error':
            if (type === 'filled') {
                return css`
                    background-color: ${(props) =>
                        props.theme.colors.error.main};
                    color: ${(props) => props.theme.colors.common.white};
                `;
            }
            return css`
                background-color: transparent;
                border: 1px solid ${(props) => props.theme.colors.error.main};
                color: ${(props) => props.theme.colors.error.main};
            `;

        default:
            return ``;
    }
};

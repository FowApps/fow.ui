import { css } from 'styled-components';

type TypeTypes = 'filled' | 'outlined';
type ColorTypes = 'grey' | 'primary' | 'info' | 'success' | 'warning' | 'error';

export const setColor = (type: TypeTypes, color: ColorTypes) => {
    switch (color) {
        case 'grey':
            if (type === 'filled') {
                return css`
                    background-color: ${(props) =>
                        props.theme.fow.colors.grey.transparent16};
                    color: ${(props) => props.theme.fow.colors.text.primary};
                `;
            }
            return css`
                background-color: transparent;
                border: 1px solid
                    ${(props) => props.theme.fow.colors.grey.transparent32};
                color: ${(props) => props.theme.fow.colors.text.primary};
            `;
        case 'primary':
            if (type === 'filled') {
                return css`
                    background-color: ${(props) =>
                        props.theme.fow.colors.primary.main};
                    color: ${(props) => props.theme.fow.colors.common.white};
                `;
            }
            return css`
                background-color: transparent;
                border: 1px solid
                    ${(props) => props.theme.fow.colors.primary.main};
                color: ${(props) => props.theme.fow.colors.primary.main};
            `;
        case 'info':
            if (type === 'filled') {
                return css`
                    background-color: ${(props) =>
                        props.theme.fow.colors.info.main};
                    color: ${(props) => props.theme.fow.colors.common.white};
                `;
            }
            return css`
                background-color: transparent;
                border: 1px solid ${(props) => props.theme.fow.colors.info.main};
                color: ${(props) => props.theme.fow.colors.info.main};
            `;
        case 'success':
            if (type === 'filled') {
                return css`
                    background-color: ${(props) =>
                        props.theme.fow.colors.success.main};
                    color: ${(props) => props.theme.fow.colors.text.primary};
                `;
            }
            return css`
                background-color: transparent;
                border: 1px solid
                    ${(props) => props.theme.fow.colors.success.main};
                color: ${(props) => props.theme.fow.colors.success.main};
            `;
        case 'warning':
            if (type === 'filled') {
                return css`
                    background-color: ${(props) =>
                        props.theme.fow.colors.warning.main};
                    color: ${(props) => props.theme.fow.colors.text.primary};
                `;
            }
            return css`
                background-color: transparent;
                border: 1px solid
                    ${(props) => props.theme.fow.colors.warning.main};
                color: ${(props) => props.theme.fow.colors.warning.main};
            `;
        case 'error':
            if (type === 'filled') {
                return css`
                    background-color: ${(props) =>
                        props.theme.fow.colors.error.main};
                    color: ${(props) => props.theme.fow.colors.common.white};
                `;
            }
            return css`
                background-color: transparent;
                border: 1px solid
                    ${(props) => props.theme.fow.colors.error.main};
                color: ${(props) => props.theme.fow.colors.error.main};
            `;

        default:
            return ``;
    }
};

import { css } from 'styled-components';

type TypeTypes = 'filled' | 'outlined';
type ColorTypes =
    | 'grey'
    | 'darkGrey'
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';

export const setColor = (type: TypeTypes, color: ColorTypes) => {
    switch (color) {
        case 'grey':
            if (type === 'filled') {
                return css`
                    color: ${(props) => props.theme.fow.colors.text.primary};
                    background-color: ${(props) =>
                        props.theme.fow.colors.grey.transparent16};
                `;
            }
            return css`
                color: ${(props) => props.theme.fow.colors.text.primary};
                background-color: transparent;
                border: 1px solid
                    ${(props) => props.theme.fow.colors.grey.transparent32};
            `;
        case 'darkGrey':
            if (type === 'filled') {
                return css`
                    color: ${(props) => props.theme.fow.colors.text.primary};
                    background-color: ${(props) =>
                        props.theme.fow.colors.grey.light};
                `;
            }
            return css`
                color: ${(props) => props.theme.fow.colors.text.primary};
                background-color: transparent;
                border: 1px solid
                    ${(props) => props.theme.fow.colors.grey.transparent32};
            `;
        case 'primary':
            if (type === 'filled') {
                return css`
                    color: ${(props) => props.theme.fow.colors.common.white};
                    background-color: ${(props) =>
                        props.theme.fow.colors.primary.main};
                `;
            }
            return css`
                color: ${(props) => props.theme.fow.colors.primary.main};
                background-color: transparent;
                border: 1px solid
                    ${(props) => props.theme.fow.colors.primary.main};
            `;
        case 'info':
            if (type === 'filled') {
                return css`
                    color: ${(props) => props.theme.fow.colors.common.white};
                    background-color: ${(props) =>
                        props.theme.fow.colors.info.main};
                `;
            }
            return css`
                color: ${(props) => props.theme.fow.colors.info.main};
                background-color: transparent;
                border: 1px solid ${(props) => props.theme.fow.colors.info.main};
            `;
        case 'success':
            if (type === 'filled') {
                return css`
                    color: ${(props) => props.theme.fow.colors.text.primary};
                    background-color: ${(props) =>
                        props.theme.fow.colors.success.main};
                `;
            }
            return css`
                color: ${(props) => props.theme.fow.colors.success.main};
                background-color: transparent;
                border: 1px solid
                    ${(props) => props.theme.fow.colors.success.main};
            `;
        case 'warning':
            if (type === 'filled') {
                return css`
                    color: ${(props) => props.theme.fow.colors.text.primary};
                    background-color: ${(props) =>
                        props.theme.fow.colors.warning.main};
                `;
            }
            return css`
                color: ${(props) => props.theme.fow.colors.warning.main};
                background-color: transparent;
                border: 1px solid
                    ${(props) => props.theme.fow.colors.warning.main};
            `;
        case 'error':
            if (type === 'filled') {
                return css`
                    color: ${(props) => props.theme.fow.colors.common.white};
                    background-color: ${(props) =>
                        props.theme.fow.colors.error.main};
                `;
            }
            return css`
                color: ${(props) => props.theme.fow.colors.error.main};
                background-color: transparent;
                border: 1px solid
                    ${(props) => props.theme.fow.colors.error.main};
            `;

        default:
            return ``;
    }
};

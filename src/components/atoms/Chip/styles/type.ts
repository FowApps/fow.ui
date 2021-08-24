import { css } from 'styled-components';

type TypeTypes = 'filled' | 'outlined';
type ColorTypes = 'grey' | 'primary' | 'info' | 'success' | 'warning' | 'error';

export const setType = (color: ColorTypes, type: TypeTypes): any => {
    switch (type) {
        case 'outlined':
            return css`
                border: 1px solid
                    ${(props) => props.theme.fow.colors[color].transparent48};
                background-color: ${(props) =>
                    props.theme.fow.colors.common.white};
                color: ${color === 'grey'
                    ? (props) => props.theme.fow.colors.text.primary
                    : (props) => props.theme.fow.colors[color].main};
            `;
        case 'filled':
            return css`
                border: none;
                background-color: ${color === 'grey'
                    ? (props) => props.theme.fow.colors.grey.lighter
                    : (props) => props.theme.fow.colors[color].main};
                color: ${color === 'success' ||
                color === 'warning' ||
                color === 'grey'
                    ? (props) => props.theme.fow.colors.grey.darker
                    : (props) => props.theme.fow.colors.common.white};
            `;
        default:
            return '';
    }
};

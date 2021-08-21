import { css } from 'styled-components';

type TypeTypes = 'filled' | 'outlined';
type ColorTypes = 'grey' | 'primary' | 'info' | 'success' | 'warning' | 'error';

export const setType = (color: ColorTypes, type: TypeTypes): any => {
    switch (type) {
        case 'outlined':
            return css`
                color: ${color === 'grey'
                    ? (props) => props.theme.fow.colors.text.primary
                    : (props) => props.theme.fow.colors[color].main};
                background-color: ${(props) =>
                    props.theme.fow.colors.common.white};
                border: 1px solid
                    ${(props) => props.theme.fow.colors[color].transparent48};
            `;
        case 'filled':
            return css`
                color: ${color === 'success' ||
                color === 'warning' ||
                color === 'grey'
                    ? (props) => props.theme.fow.colors.grey.darker
                    : (props) => props.theme.fow.colors.common.white};
                background-color: ${color === 'grey'
                    ? (props) => props.theme.fow.colors.grey.lighter
                    : (props) => props.theme.fow.colors[color].main};
                border: none;
            `;
        default:
            return '';
    }
};

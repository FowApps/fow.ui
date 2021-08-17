import { css } from 'styled-components';
import { theme } from '../../../../theme/theme';

type TypeTypes = 'filled' | 'outlined';
type ColorTypes = 'grey' | 'primary' | 'info' | 'success' | 'warning' | 'error';

export const setType = (color: ColorTypes, type: TypeTypes): any => {
    switch (type) {
        case 'outlined':
            return css`
                color: ${color === 'grey'
                    ? theme.fow.colors.text.primary
                    : theme.fow.colors[color].main};
                background-color: ${theme.fow.colors.common.white};
                border: 1px solid ${theme.fow.colors[color].transparent48};
            `;
        case 'filled':
            return css`
                color: ${color === 'success' ||
                color === 'warning' ||
                color === 'grey'
                    ? theme.fow.colors.grey.darker
                    : theme.fow.colors.common.white};
                background-color: ${color === 'grey'
                    ? theme.fow.colors.grey.lighter
                    : theme.fow.colors[color].main};
                border: none;
            `;
        default:
            return '';
    }
};

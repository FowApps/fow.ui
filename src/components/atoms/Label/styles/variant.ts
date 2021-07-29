import { css } from 'styled-components';
import { theme } from '../../../../theme/theme';

const setVariant = (color: string, variant: string): any => {
    switch (variant) {
        case 'outlined':
            return css`
                color: ${theme.fow.colors[color].main};
                background-color: ${theme.fow.colors.common.white};
                border: 1px solid ${theme.fow.colors[color].transparent48};
            `;
        case 'filled':
            return css`
                color: ${theme.fow.colors.common.white};
                background-color: ${theme.fow.colors[color].main};
                border: none;
                box-shadow: 0px 8px 16px
                    ${theme.fow.colors[color].transparent24};
            `;
        case 'ghost':
            return css`
                color: ${theme.fow.colors[color].dark};
                background-color: ${theme.fow.colors[color].transparent16};
                border: none;
            `;
        default:
            return '';
    }
};

export default setVariant;

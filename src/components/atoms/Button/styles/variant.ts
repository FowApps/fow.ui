import { css } from 'styled-components';
import { theme } from '../../../../theme/theme';

type VariantTypes = 'text' | 'outlined' | 'contained';
type ColorTypes = 'grey' | 'primary' | 'info' | 'success' | 'warning' | 'error';

const setVariant = (color: ColorTypes, variant: VariantTypes): any => {
    switch (variant) {
        case 'text':
            return css`
                border: none !important;
                background-color: transparent;
                color: ${theme.fow.colors[color].main};

                &:hover {
                    background-color: ${theme.fow.colors[color].transparent8};
                }

                &:active {
                    background-color: ${theme.fow.colors[color].transparent16};
                }

                &:disabled {
                    background-color: transparent !important;
                    color: ${theme.fow.colors.grey.transparent48} !important;
                }
            `;
        case 'outlined':
            return css`
                border: 1px solid ${theme.fow.colors[color].transparent48};
                background-color: ${theme.fow.colors.common.white};
                color: ${theme.fow.colors[color].main};

                &:hover {
                    border-color: ${theme.fow.colors[color].main} !important;
                    background-color: ${theme.fow.colors[color].transparent8};
                }

                &:active {
                    background-color: ${theme.fow.colors[color].transparent16};
                }

                &:disabled {
                    border-color: ${theme.fow.colors.grey
                        .transparent24} !important;
                    background-color: transparent !important;
                    color: ${theme.fow.colors.grey.transparent48} !important;
                }
            `;
        case 'contained':
            return css`
                border: none;
                background-color: ${theme.fow.colors[color].main};
                color: ${color === 'success' || color === 'warning'
                    ? theme.fow.colors.grey.darker
                    : theme.fow.colors.common.white};
                box-shadow: 0px 8px 16px
                    ${theme.fow.colors[color].transparent24};

                &:hover {
                    background-color: ${theme.fow.colors[color].dark};
                    color: ${theme.fow.colors.common.white};
                }

                &:active {
                    background-color: ${theme.fow.colors[color].darker};
                    color: ${theme.fow.colors.common.white};
                }

                &:disabled {
                    background-color: ${theme.fow.colors.grey
                        .transparent24} !important;
                    color: ${theme.fow.colors.grey.transparent48} !important;
                    box-shadow: none !important;
                }
            `;
        default:
            return '';
    }
};

export default setVariant;

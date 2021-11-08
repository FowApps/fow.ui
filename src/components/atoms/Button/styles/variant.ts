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
                color: ${theme.fow.colors[color].dark};

                &:hover {
                    color: ${theme.fow.colors[color].darker};
                }

                &:active {
                    color: ${theme.fow.colors[color].darker};
                }

                &:disabled {
                    color: ${theme.fow.colors.greyDark.lighter} !important;
                }
            `;
        case 'outlined':
            return css`
                border: 1px solid ${theme.fow.colors[color].dark};
                background-color: transparent !important;
                color: ${theme.fow.colors[color].dark};

                &:hover {
                    border-color: ${theme.fow.colors[color].darker} !important;
                    color: ${theme.fow.colors[color].darker};
                    background-color: transparent !important;
                }

                &:active {
                    background-color: ${theme.fow.colors[color].darker};
                }

                &:disabled {
                    border-color: ${theme.fow.colors.greyDark
                        .lighter} !important;
                    background-color: transparent !important;
                    color: ${theme.fow.colors.greyDark.lighter} !important;
                }
            `;
        case 'contained':
            return css`
                border: none;
                background-color: ${theme.fow.colors[color].dark};
                color: ${theme.fow.colors.common.white};
                box-shadow: 0px 8px 16px
                    ${theme.fow.colors[color].transparent24};

                &:hover {
                    background-color: ${theme.fow.colors[color].darker};
                    color: ${theme.fow.colors.common.white};
                }

                &:active {
                    background-color: ${theme.fow.colors[color].darker};
                    color: ${theme.fow.colors.common.white};
                }

                &:disabled {
                    background-color: ${theme.fow.colors.greyLight
                        .main} !important;
                    color: ${theme.fow.colors.greyDark.lighter} !important;
                    box-shadow: none !important;
                }
            `;
        default:
            return '';
    }
};

export default setVariant;

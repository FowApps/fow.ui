import { css } from 'styled-components';
import { theme } from '../../../../theme/theme';

const setVariant = (color: string, variant: string): any => {
    switch (variant) {
        case 'text':
            return css`
                color: ${theme.fow.colors[color].main};
                background-color: transparent;
                border: none !important;

                &:hover {
                    background-color: ${theme.fow.colors[color].transparent8};
                }

                &:active {
                    background-color: ${theme.fow.colors[color].transparent16};
                }

                &:disabled {
                    color: ${theme.fow.colors.grey.transparent48} !important;
                    background-color: transparent !important;
                }
            `;
        case 'outlined':
            return css`
                color: ${theme.fow.colors[color].main};
                background-color: ${theme.fow.colors.common.white};
                border: 1px solid ${theme.fow.colors[color].transparent48};

                &:hover {
                    background-color: ${theme.fow.colors[color].transparent8};
                    border-color: ${theme.fow.colors[color].main} !important;
                }

                &:active {
                    background-color: ${theme.fow.colors[color].transparent16};
                }

                &:disabled {
                    color: ${theme.fow.colors.grey.transparent48} !important;
                    background-color: transparent !important;
                    border-color: ${theme.fow.colors.grey
                        .transparent24} !important;
                }
            `;
        case 'contained':
            return css`
                color: ${theme.fow.colors.common.white};
                background-color: ${theme.fow.colors[color].main};
                border: none;
                box-shadow: 0px 8px 16px
                    ${theme.fow.colors[color].transparent24};

                &:hover {
                    background-color: ${theme.fow.colors[color].dark};
                }

                &:active {
                    background-color: ${theme.fow.colors[color].darker};
                }

                &:disabled {
                    color: ${theme.fow.colors.grey.transparent48} !important;
                    background-color: ${theme.fow.colors.grey
                        .transparent24} !important;
                    box-shadow: none !important;
                }
            `;
        default:
            return '';
    }
};

export default setVariant;

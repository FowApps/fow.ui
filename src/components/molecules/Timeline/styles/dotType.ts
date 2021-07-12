import { css } from 'styled-components';

type Type = 'filled' | 'outlined';

export const setDotType = (type: Type, isActive: boolean) => {
    switch (type) {
        case 'filled':
            return css`
                background-color: ${(props) =>
                    isActive
                        ? props.theme.fow.colors.primary.light
                        : props.theme.fow.colors.grey.light};
            `;
        case 'outlined':
            return css`
                background-color: transparent;
                border: 2px solid;
                border-color: ${(props) =>
                    isActive
                        ? props.theme.fow.colors.primary.light
                        : props.theme.fow.colors.grey.light};
            `;
        default:
            return '';
    }
};

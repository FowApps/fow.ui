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
                border: 2px solid;
                border-color: ${(props) =>
                    isActive
                        ? props.theme.fow.colors.primary.light
                        : props.theme.fow.colors.grey.light};
                background-color: transparent;
            `;
        default:
            return '';
    }
};

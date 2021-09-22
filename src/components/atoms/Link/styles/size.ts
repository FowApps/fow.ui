import { css } from 'styled-components';

type SizeTypes = 'small' | 'medium' | 'large';

export const setSize = (size: SizeTypes) => {
    switch (size) {
        case 'small':
            return css`
                font-size: 1.2rem;
            `;
        case 'medium':
            return css`
                font-size: 1.6rem;
            `;
        case 'large':
            return css`
                font-size: 2rem;
            `;
        default:
            return ``;
    }
};

import { css } from 'styled-components';

type SizeTypes = 'small' | 'medium' | 'large';

export const setSize = (size: SizeTypes) => {
    switch (size) {
        case 'small':
            return css`
                font-weight: 500;
                font-size: 1rem;
                line-height: 1.8rem;
            `;
        case 'medium':
            return css`
                font-weight: 500;
                font-size: 1.2rem;
                line-height: 2rem;
            `;
        case 'large':
            return css`
                font-size: 1.4rem;
                line-height: 2.2rem;
            `;
        default:
            return ``;
    }
};

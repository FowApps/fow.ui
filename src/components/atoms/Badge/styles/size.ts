import { css } from 'styled-components';

type SizeTypes = 'small' | 'medium' | 'large';

export const setSize = (size: SizeTypes) => {
    switch (size) {
        case 'small':
            return css`
                min-width: 1.2rem;
                min-height: 1.2rem;
                font-size: 1rem;
                font-weight: 600;
                line-height: 1.2rem;
                max-width: max-content;
            `;
        case 'medium':
            return css`
                min-width: 1.6rem;
                min-height: 1.6rem;
                font-size: 1.2rem;
                font-weight: 600;
                line-height: 1.6rem;
                max-width: max-content;
            `;
        case 'large':
            return css`
                min-width: 2rem;
                min-height: 2rem;
                font-size: 1.4rem;
                font-weight: 600;
                line-height: 2rem;
                max-width: max-content;
            `;
        default:
            return ``;
    }
};

import { css } from 'styled-components';

type SizeTypes = 'small' | 'medium' | 'large';

export const setSize = (size: SizeTypes) => {
    switch (size) {
        case 'small':
            return css`
                height: 1.8rem;
                font-size: 0.9rem;
            `;
        case 'medium':
            return css`
                height: 2rem;
                line-height: 20px;
                font-size: 1rem;
            `;
        case 'large':
            return css`
                height: 2.2rem;
                font-size: 1.4rem;
                line-height: 22px;
            `;
        default:
            return ``;
    }
};

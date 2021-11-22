import { css } from 'styled-components';

type SizeTypes = 'small' | 'medium' | 'large';

export const setSize = (size: SizeTypes) => {
    switch (size) {
        case 'small':
            return css`
                height: 2.2rem;
            `;
        case 'medium':
            return css`
                height: 3rem;
            `;
        case 'large':
            return css`
                height: 3.6rem;
            `;
        default:
            return ``;
    }
};

import { css } from 'styled-components';

export const setLevel = (level: number): any => {
    switch (level) {
        case 1:
            return css`
                font-weight: 500;
                font-size: 1.4rem;
                line-height: 2.4rem;
            `;
        case 2:
            return css`
                font-weight: 500;
                font-size: 1.2rem;
                line-height: 2.2rem;
            `;
        case 3:
            return css`
                font-weight: 500;
                font-size: 1rem;
                line-height: 1.8rem;
            `;
        default:
            return ``;
    }
};

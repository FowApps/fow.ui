import { css } from 'styled-components';

export const setLevel = (level: number): any => {
    switch (level) {
        case 1:
            return css`
                font-weight: normal;
                font-size: 1.6rem;
                line-height: 2.4rem;
            `;
        case 2:
            return css`
                font-weight: normal;
                font-size: 1.4rem;
                line-height: 2.2rem;
            `;
        default:
            return ``;
    }
};

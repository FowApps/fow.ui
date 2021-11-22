import { css } from 'styled-components';

const setShape = (shape: 'rounded' | 'circle' | 'flat'): any => {
    switch (shape) {
        case 'rounded':
            return css`
                border-radius: 8px;
            `;
        case 'circle':
            return css`
                border-radius: 50%;
            `;
        case 'flat':
            return css`
                border-radius: 0;
            `;
        default:
            return css`
                border-radius: 50%;
            `;
    }
};

export default setShape;

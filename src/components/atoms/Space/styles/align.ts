import { css } from 'styled-components';

type Align = 'start' | 'end' | 'center' | 'baseline';

export const setAlign = (align: Align): any => {
    switch (align) {
        case 'baseline':
            return css`
                align-items: baseline;
            `;
        case 'center':
            return css`
                align-items: center;
            `;
        case 'end':
            return css`
                align-items: flex-end;
            `;
        case 'start':
            return css`
                align-items: flex-start;
            `;
        default:
            return css`
                align-items: flex-start;
            `;
    }
};

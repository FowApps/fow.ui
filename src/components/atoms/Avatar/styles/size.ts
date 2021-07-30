import { css } from 'styled-components';

const setSize = (size: string): any => {
    switch (size) {
        case 'large':
            return css`
                width: 4.8rem;
                min-width: 4.8rem;
                height: 4.8rem;
                min-height: 4.8rem;
            `;
        case 'medium':
            return css`
                width: 4rem;
                min-width: 4rem;
                height: 4rem;
                min-height: 4rem;
            `;
        case 'small':
            return css`
                width: 3.2rem;
                min-width: 3.2rem;
                height: 3.2rem;
                min-height: 3.2rem;
            `;
        case 'xsmall':
            return css`
                width: 2.4rem;
                min-width: 2.4rem;
                height: 2.4rem;
                min-height: 2.4rem;
            `;
        default:
            return '';
    }
};

export default setSize;

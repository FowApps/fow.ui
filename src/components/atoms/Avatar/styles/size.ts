import { css } from 'styled-components';

const setSize = (size: string): any => {
    switch (size) {
        case 'large':
            return css`
                width: 4.8rem;
                height: 4.8rem;
            `;
        case 'medium':
            return css`
                width: 4rem;
                height: 4rem;
            `;
        case 'small':
            return css`
                width: 3.2rem;
                height: 3.2rem;
            `;
        case 'xsmall':
            return css`
                width: 2.4rem;
                height: 2.4rem;
            `;
        default:
            return '';
    }
};

export default setSize;

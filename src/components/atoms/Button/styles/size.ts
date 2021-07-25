import { css } from 'styled-components';

const setSize = (size: string, isFab: boolean, hasChildren: boolean): any => {
    switch (size) {
        case 'large':
            return css`
                width: ${!hasChildren && isFab ? '4.8rem' : 'auto'};
                height: 4.8rem;
                padding: 0 2.2rem;
                font-weight: 600;
                font-size: 1.5rem;
                font-style: normal;
                line-height: 2.6rem;
                letter-spacing: 0.2px;
            `;
        case 'medium':
            return css`
                width: ${!hasChildren && isFab ? '4rem' : 'auto'};
                height: ${isFab ? 4 : 3.6}rem;
                padding: 0 1.6rem;
                font-weight: 600;
                font-size: 1.4rem;
                font-style: normal;
                line-height: 2.6rem;
                letter-spacing: 0.2px;
            `;
        case 'small':
            return css`
                width: ${!hasChildren && isFab ? '3.4rem' : 'auto'};
                height: ${isFab ? 3.4 : 3.6}rem;
                padding: 0 1rem;
                font-weight: 600;
                font-size: 1.3rem;
                font-style: normal;
                line-height: 2.2rem;
                letter-spacing: 0.2px;
            `;
        default:
            return '';
    }
};

export default setSize;

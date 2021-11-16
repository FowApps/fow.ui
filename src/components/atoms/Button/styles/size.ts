import { css } from 'styled-components';

const setSize = (size: string, isFab: boolean, hasChildren: boolean): any => {
    switch (size) {
        case 'large':
            return css`
                width: ${!hasChildren && isFab ? '4.8rem' : 'auto'};
                height: 4.2rem;
                padding: 0.8rem;
                font-weight: 600;
                font-style: normal;
                font-size: 1.5rem;
                line-height: 2.6rem;
                letter-spacing: 0.2px;
            `;
        case 'medium':
            return css`
                width: ${!hasChildren && isFab ? '4rem' : 'auto'};
                height: ${isFab ? 4 : 3.2}rem;
                padding: 0.4rem 0.8rem;
                font-weight: 600;
                font-style: normal;
                font-size: 1.4rem;
                line-height: 2.4rem;
                letter-spacing: 0.2px;
            `;
        case 'small':
            return css`
                width: ${!hasChildren && isFab ? '3.4rem' : 'auto'};
                height: ${isFab ? 3.4 : 2.5}rem;
                padding: 0.4rem 0.8rem;
                font-weight: 600;
                font-style: normal;
                font-size: 1rem;
                line-height: 1.7rem;
                letter-spacing: 0.2px;
            `;
        default:
            return '';
    }
};

export default setSize;

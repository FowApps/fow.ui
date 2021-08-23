import { css } from 'styled-components';

type OrientationType = 'left' | 'right' | 'center';

const setOriantation = (oriantation: OrientationType) => {
    switch (oriantation) {
        case 'left':
            return css`
                &:before {
                    content: '';
                    width: 5%;
                    border-top: 1px solid transparent;
                    border-top-color: inherit;
                    border-bottom: 0;
                    transform: translateY(50%);
                }

                &:after {
                    content: '';
                    width: 95%;
                    border-top: 1px solid transparent;
                    border-top-color: inherit;
                    border-bottom: 0;
                    transform: translateY(50%);
                }
            `;
        case 'right':
            return css`
                &:before {
                    content: '';
                    width: 95%;
                    border-top: 1px solid transparent;
                    border-top-color: inherit;
                    border-bottom: 0;
                    transform: translateY(50%);
                }

                &:after {
                    content: '';
                    width: 5%;
                    border-top: 1px solid transparent;
                    border-top-color: inherit;
                    border-bottom: 0;
                    transform: translateY(50%);
                }
            `;
        default:
            return css`
                &:before,
                &:after {
                    content: '';
                    width: 50%;
                    border-top: 1px solid transparent;
                    border-top-color: inherit;
                    border-bottom: 0;
                    transform: translateY(50%);
                }
            `;
    }
};

export default setOriantation;

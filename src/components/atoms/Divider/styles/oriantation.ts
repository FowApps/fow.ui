import { css } from 'styled-components';

type OrientationType = 'left' | 'right' | 'center';

const setOriantation = (oriantation: OrientationType) => {
    switch (oriantation) {
        case 'left':
            return css`
                &:before {
                    top: 50%;
                    width: 5%;
                    position: relative;
                    border-top: 1px solid transparent;
                    border-top-color: inherit;
                    border-bottom: 0;
                    transform: translateY(50%);
                    content: '';
                }

                &:after {
                    top: 50%;
                    width: 95%;
                    position: relative;
                    border-top: 1px solid transparent;
                    border-top-color: inherit;
                    border-bottom: 0;
                    transform: translateY(50%);
                    content: '';
                }
            `;
        case 'right':
            return css`
                &:before {
                    top: 50%;
                    width: 95%;
                    position: relative;
                    border-top: 1px solid transparent;
                    border-top-color: inherit;
                    border-bottom: 0;
                    transform: translateY(50%);
                    content: '';
                }

                &:after {
                    top: 50%;
                    width: 5%;
                    position: relative;
                    border-top: 1px solid transparent;
                    border-top-color: inherit;
                    border-bottom: 0;
                    transform: translateY(50%);
                    content: '';
                }
            `;
        default:
            return css`
                &:before,
                &:after {
                    top: 50%;
                    width: 50%;
                    position: relative;
                    border-top: 1px solid transparent;
                    border-top-color: inherit;
                    border-bottom: 0;
                    transform: translateY(50%);
                    content: '';
                }
            `;
    }
};

export default setOriantation;

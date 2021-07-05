import { css } from 'styled-components';

type OrientationType = 'left' | 'right' | 'center';

const setOriantation = (oriantation: OrientationType) => {
    switch (oriantation) {
        case 'left':
            return css`
                &:before {
                    position: relative;
                    top: 50%;
                    width: 5%;
                    border-top: 1px solid transparent;
                    border-top-color: inherit;
                    border-bottom: 0;
                    transform: translateY(50%);
                    content: '';
                }

                &:after {
                    position: relative;
                    top: 50%;
                    width: 95%;
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
                    position: relative;
                    top: 50%;
                    width: 95%;
                    border-top: 1px solid transparent;
                    border-top-color: inherit;
                    border-bottom: 0;
                    transform: translateY(50%);
                    content: '';
                }

                &:after {
                    position: relative;
                    top: 50%;
                    width: 5%;
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
                    position: relative;
                    top: 50%;
                    width: 50%;
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

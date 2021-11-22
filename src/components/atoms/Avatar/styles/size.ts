import { css } from 'styled-components';

const setSize = (size: string): any => {
    switch (size) {
        case 'large':
            return css`
                width: 4rem;
                min-width: 4rem;
                height: 4rem;
                min-height: 4rem;
                h3 {
                    font-weight: 600;
                    font-size: 1.5rem;
                    line-height: 2.6rem;
                }
                svg {
                    font-size: 2.4rem;
                }
            `;
        case 'medium':
            return css`
                width: 3.6rem;
                min-width: 3.6rem;
                height: 3.6rem;
                min-height: 3.6rem;
                h3 {
                    font-weight: 600;
                    font-size: 1.4rem;
                    line-height: 2.4rem;
                }
                svg {
                    font-size: 1.6rem;
                }
            `;
        case 'small':
            return css`
                width: 2.42rem;
                min-width: 2.4rem;
                height: 2.4rem;
                min-height: 2.4rem;
                h3 {
                    font-weight: 600;
                    font-size: 1rem;
                    line-height: 1.7rem;
                }
                svg {
                    font-size: 1.2rem;
                }
            `;
        default:
            return css`
                width: 3.6rem;
                min-width: 3.6rem;
                height: 3.6rem;
                min-height: 3.6rem;
                h3 {
                    font-weight: 600;
                    font-size: 1.4rem;
                    line-height: 2.4rem;
                }
            `;
    }
};

export default setSize;

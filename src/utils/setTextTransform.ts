import { css } from 'styled-components';

type TextTransformTypes = 'lowercase' | 'capitalize' | 'uppercase';

export default (textTransform: TextTransformTypes) => {
    switch (textTransform) {
        case 'lowercase':
            return css`
                text-transform: lowercase;
            `;
        case 'capitalize':
            return css`
                text-transform: capitalize;
            `;
        case 'uppercase':
            return css`
                text-transform: uppercase;
            `;
        default:
            return css`
                text-transform: initial;
            `;
    }
};

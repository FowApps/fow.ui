import { css } from 'styled-components';

type SizeTypes = 'small' | 'medium';

export const setSize = (size: SizeTypes): any => {
    switch (size) {
        case 'medium':
            return css`
                height: 3.2rem;
                padding: 0 ${(props) => props.theme.spacing.small};
            `;
        case 'small':
            return css`
                height: 2.4rem;
                padding: 0 ${(props) => props.theme.spacing.xsmall};
                font-size: 1.4rem;
                line-height: 2.2rem;
            `;
        default:
            return ``;
    }
};

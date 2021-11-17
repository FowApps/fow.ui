import { css } from 'styled-components';

type SizeTypes = 'small' | 'medium' | 'large';

export const setSize = (size: SizeTypes) => {
    switch (size) {
        case 'small':
            return css`
                height: 1.8rem;
                font-size: 1rem;
            `;
        case 'medium':
            return css`
                height: 2rem;
            `;
        case 'large':
            return css`
                height: 2.2rem;
                font-size: 1.4rem;
                padding-left: ${(props) => props.theme.fow.spacing.large};
                padding-right: ${(props) => props.theme.fow.spacing.large};
            `;
        default:
            return ``;
    }
};

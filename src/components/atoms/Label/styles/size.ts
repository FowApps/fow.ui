import { css } from 'styled-components';

type SizeTypes = 'small' | 'medium' | 'large';

export const setSize = (size: SizeTypes) => {
    switch (size) {
        case 'small':
            return css`
                height: 1.2rem;
                font-size: 0.8rem;
            `;
        case 'medium':
            return css`
                height: 1.8rem;
            `;
        case 'large':
            return css`
                height: 2.4rem;
                font-size: 1.8rem;
                padding-left: ${(props) => props.theme.fow.spacing.large};
                padding-right: ${(props) => props.theme.fow.spacing.large};
            `;
        default:
            return ``;
    }
};

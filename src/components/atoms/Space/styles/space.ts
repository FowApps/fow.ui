import { css } from 'styled-components';

type Direction = 'vertical' | 'horizontal';
type Size =
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'xxxlarge';

export const setSpaceAndDirection = (direction: Direction, size: Size): any => {
    switch (direction) {
        case 'horizontal':
            return css`
                flex-direction: row;
                > *:not(:last-child) {
                    margin-right: ${(props) => props.theme.fow.spacing[size]};
                }
            `;
        case 'vertical':
            return css`
                flex-direction: column;
                > *:not(:last-child) {
                    margin-bottom: ${(props) => props.theme.fow.spacing[size]};
                }
            `;
        default:
            return css`
                flex-direction: row;
                > *:not(:last-child) {
                    margin-right: ${(props) => props.theme.fow.spacing[size]};
                }
            `;
    }
};
